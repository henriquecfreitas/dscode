import { Test, TestingModule } from '@nestjs/testing';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersController: UsersController;
  const mockedUsersService = {} as UsersService;

  beforeAll(async () => {
    const users = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        { provide: UsersService, useValue: mockedUsersService }
      ],
    }).compile();

    usersController = users.get<UsersController>(UsersController);
  });

  describe("getUsers", () => {
    it("Should call UsersService's getUsers method", async () => {
      const users = [
        { id: "1", name: "Jhon Smith", email: "address@email.com", birthdate: Date.now(), avatar: "" },
        { id: "2", name: "Jhon Snow", email: "address@email.net", birthdate: Date.now(), avatar: "" },
        { id: "3", name: "Jhon Snake", email: "address@email.org", birthdate: Date.now(), avatar: "" },
      ];

      mockedUsersService.getUsers = jest.fn().mockResolvedValue(users);
      
      const result = await usersController.getUsers();
      
      expect(result).toBe(users);
    });
  });

  describe("updateUser", () => {
    it("Should call UsersService's updateUser method", async () => {
      const id = "123";
      const updatedFields = { email: "new@email.com" };

      const updateUserMock = jest.fn();
      mockedUsersService.updateUser = updateUserMock;
      
      await usersController.updateUser({ id }, updatedFields);
      
      expect(updateUserMock).toBeCalledWith(id, updatedFields);
    });
  });

  describe("deleteUser", () => {
    it("Should call UsersService's deleteUser method", async () => {
      const id = "123";

      const deleteUserMock = jest.fn();
      mockedUsersService.deleteUser = deleteUserMock;
      
      await usersController.deleteUser({ id });
      
      expect(deleteUserMock).toBeCalledWith(id);
    });
  });
});
