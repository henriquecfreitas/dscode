import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User as UserDTO } from "@dashskin/users-dtos";
import { User } from 'users-api/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async getUsers(): Promise<UserDTO[]> {
    const users = await this.userModel.find().exec();
    return users.map(user => ({
      name: user.name,
      email: user.email,
      birthdate: user.birthdate,
      avatar: user.avatar,
    }));
  }
}
