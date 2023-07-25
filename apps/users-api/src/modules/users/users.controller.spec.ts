import { Test, TestingModule } from '@nestjs/testing';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let users: TestingModule;

  beforeAll(async () => {
    users = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const usersController = users.get<UsersController>(UsersController);
      expect(usersController.getUsers()).toEqual({message: 'Hello API'});
    });
  });
});
