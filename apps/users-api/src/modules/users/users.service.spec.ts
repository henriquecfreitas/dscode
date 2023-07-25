import { Test } from '@nestjs/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeAll(async () => {
    const users = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = users.get<UsersService>(UsersService);
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      expect(service.getUsers()).toEqual({message: 'Hello API'});
    });
  });
});
