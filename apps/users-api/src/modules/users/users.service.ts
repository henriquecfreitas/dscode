import { Model, Types } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User as UserDTO } from "@dscode/users-dtos";
import { User } from 'users-api/schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async getUsers(): Promise<UserDTO[]> {
    const users = await this.userModel.find().exec();
    return users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      birthdate: user.birthdate,
      avatar: user.avatar,
    }));
  }

  async updateUser(id: string, user: Partial<User>) {
    let objectId: Types.ObjectId;
    try {
      objectId = new Types.ObjectId(id);
    } catch (_) {
      throw new NotFoundException();
    }

    const filter = { _id: objectId };
    const { matchedCount } = await this.userModel.updateOne(filter, user);
    if (!matchedCount) {
      throw new NotFoundException();
    }
  }

  async deleteUser(id: string) {
    let objectId: Types.ObjectId;
    try {
      objectId = new Types.ObjectId(id);
    } catch (_) {
      throw new NotFoundException();
    }

    await this.userModel.deleteOne({ _id: objectId });
  }
}
