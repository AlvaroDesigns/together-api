import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { hash } from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiTags('users')
  @Get()
  @ApiOperation({ summary: 'Get users' })
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':email')
  @ApiOperation({ summary: 'Get user by Email' })
  getUserById(@Param('email') email: string) {
    return this.usersService.getUserById(email);
  }

  @ApiTags('users')
  @Post()
  @ApiOperation({ summary: 'Create user' })
  createUser(@Body() user: CreateUserDto) {
    const hashedPassword = hash(user.password, 10);

    return this.usersService.createUser({
      ...user,
      password: hashedPassword,
    });
  }
}
