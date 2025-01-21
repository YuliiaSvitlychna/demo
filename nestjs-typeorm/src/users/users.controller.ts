import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserNotFoundError } from 'src/users/errors/user-not-found.error';
import { UserNotDeletedError } from 'src/users/errors/user-not-deleted.error';
import { fakeUser } from './fakes/user.fake';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({
    status: 201,
    schema: {
      example: fakeUser,
    },
  })
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.usersService.create(createUserDto);
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  @ApiResponse({
    status: 200,
    schema: {
      example: [fakeUser, fakeUser, fakeUser],
    },
  })
  async findAll() {
    try {
      return await this.usersService.findAll();
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    schema: {
      example: fakeUser,
    },
  })
  async findOne(@Param('id') id: string) {
    try {
      const user = await this.usersService.findOne(id);
      if (user === null) {
        throw new UserNotFoundError(id);
      }
      return user;
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    schema: {
      example: fakeUser,
    },
  })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const user = await this.usersService.update(id, updateUserDto);
      if (user === null) {
        throw new UserNotFoundError(id);
      }
      return user;
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    schema: {
      example: { status: 'ok' },
    },
  })
  async remove(@Param('id') id: string) {
    try {
      const result = await this.usersService.remove(id);
      if (result.affected === 0) {
        throw new UserNotDeletedError();
      }
      return { status: 'ok' };
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }
}
