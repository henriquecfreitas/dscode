import { Body, Controller, Delete, Get, HttpCode, Param, Patch } from '@nestjs/common';
import { GetUsersResponse, UpdateUserRequest } from "@dscode/users-dtos";

import { UsersService } from './users.service';

@Controller("/users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<GetUsersResponse> {
    return await this.usersService.getUsers();
  }

  @Patch(":id")
  @HttpCode(204)
  async updateUser(
    @Param() { id }: { id: string },
    @Body() user: UpdateUserRequest,
  ) {
    await this.usersService.updateUser(id, user);
  }

  @Delete(":id")
  @HttpCode(204)
  async deleteUser(
    @Param() { id }: { id: string },
  ) {
    await this.usersService.deleteUser(id);
  }
}
