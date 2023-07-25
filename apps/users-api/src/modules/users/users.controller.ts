import { Controller, Get } from '@nestjs/common';
import { GetUsersResponse } from "@dscode/users-dtos";

import { UsersService } from './users.service';

@Controller("/users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<GetUsersResponse> {
    const users = await this.usersService.getUsers();
    return users;
  }
}
