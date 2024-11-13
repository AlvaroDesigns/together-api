import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUsers() {
    return this.prisma.user.findMany();
  }

  getUserById(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  createUser(user: CreateUserDto) {
    return this.prisma.user.create({ data: user });
  }
}
