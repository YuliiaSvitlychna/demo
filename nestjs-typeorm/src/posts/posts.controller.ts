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
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostNotFoundError } from './errors/post-not-found.error';
import { PostNotDeletedError } from './errors/post-not-deleted-error';
import { fakePost } from './fakes/post.fake';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiResponse({
    status: 201,
    schema: {
      example: fakePost,
    },
  })
  async create(@Body() createPostDto: CreatePostDto) {
    try {
      return await this.postsService.create(createPostDto);
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  @ApiResponse({
    status: 200,
    schema: {
      example: [fakePost, fakePost, fakePost],
    },
  })
  async findAll() {
    try {
      return await this.postsService.findAll();
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    schema: {
      example: fakePost,
    },
  })
  async findOne(@Param('id') id: string) {
    try {
      const post = await this.postsService.findOne(id);
      if (post === null) {
        throw new PostNotFoundError(id);
      }
      return post;
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    schema: {
      example: fakePost,
    },
  })
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    try {
      const post = await this.postsService.update(id, updatePostDto);
      if (post === null) {
        throw new PostNotFoundError(id);
      }
      return post;
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
      const result = await this.postsService.remove(id);
      if (result.affected === 0) {
        throw new PostNotDeletedError();
      }
      return { status: 'ok' };
    } catch (error: any) {
      throw new BadRequestException(error.message);
    }
  }
}
