import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from 'users-api/modules/users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://henrique:eV020Cl7rHGViWAb@cluster0.l2mqowe.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule,
  ],
})
export class AppModule {}
