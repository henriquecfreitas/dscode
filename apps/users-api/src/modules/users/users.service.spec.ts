import { Model, Types } from 'mongoose';
import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

import { User } from 'users-api/schemas/user.schema';
import { UsersService } from './users.service';
import { NotFoundException } from '@nestjs/common';

describe('UsersService', () => {
  let service: UsersService;
  const mockedUserModel = {} as Model<User>;

  beforeAll(async () => {
    const users = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getModelToken(User.name), useValue: mockedUserModel },
      ],
    }).compile();

    service = users.get<UsersService>(UsersService);
  });

  describe("getUsers", () => {
    it("Should fetch, map and return users from the repository", async () => {
      const users = [
        { id: "1", name: "Jhon Smith", email: "address@email.com", birthdate: Date.now(), avatar: "" },
        { id: "2", name: "Jhon Snow", email: "address@email.net", birthdate: Date.now(), avatar: "" },
        { id: "3", name: "Jhon Snake", email: "address@email.org", birthdate: Date.now(), avatar: "" },
      ]

      mockedUserModel.find = jest.fn().mockResolvedValue(users);
      
      const result = await service.getUsers();
      
      expect(result).not.toBe(users);
      expect(result).toEqual(users);
    });
  });

  describe("updateUser", () => {
    it("Should find and update an user by ID", async () => {
      const id = "64c01b5205fc4f7b8fe08842";
      const objectId = new Types.ObjectId(id);
      const updatedFields = { email: "new@email.com" };

      const updateOneMock = jest.fn().mockResolvedValue({ matchedCount: 1 });
      mockedUserModel.updateOne = updateOneMock;

      await service.updateUser(id, updatedFields);

      expect(updateOneMock).toBeCalledWith({ _id: objectId }, updatedFields);
    });
    
    it("Should fail when called with an invalid ID", async () => {
      const id = "123987";
      try {
        await service.updateUser(id, {});
        fail("It shouldn't be resolved");
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
    
    it("Should fail when no user is found by the given ID", async () => {
      const id = "64c01b5205fc4f7b8fe08842";

      const updateOneMock = jest.fn().mockResolvedValue({ matchedCount: 0 });
      mockedUserModel.updateOne = updateOneMock;

      try {
        await service.updateUser(id, {});
        fail("It shouldn't be resolved");
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe("deleteUser", () => {
    it("Should delete an user by ID ", async () => {
      const id = "64c01b5205fc4f7b8fe08842";
      const objectId = new Types.ObjectId(id);

      const deleteOneMock = jest.fn();
      mockedUserModel.deleteOne = deleteOneMock;

      await service.deleteUser(id);

      expect(deleteOneMock).toBeCalledWith({ _id: objectId });
    });

    it("Should fail when called with an invalid ID", async () => {
      const id = "123987";
      try {
        await service.deleteUser(id);
        fail("It shouldn't be resolved");
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });

});
