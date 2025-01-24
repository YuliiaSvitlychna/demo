import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Post } from './entities/post.entity';
import { User } from '@app/users/entities/user.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { AuthorNotFoundError } from './errors/author-not-found.error';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,

    @InjectDataSource()
    private dataSource: DataSource,
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postsRepository.find({ relations: ['author'] });
  }

  async findOne(id: string): Promise<Post | null> {
    const post = await this.postsRepository.findOne({
      where: { id },
      relations: ['author'],
    });
    return post;
  }

  async remove(id: string) {
    return this.postsRepository.delete(id);
  }

  async create(createPostDto: CreatePostDto) {
    return this.dataSource.transaction(async (manager) => {
      const postsRepository = manager.getRepository(Post);
      const usersRepository = manager.getRepository(User);

      const author = await usersRepository.findOne({
        where: {
          id: createPostDto.authorId,
        },
      });

      if (!author) {
        throw new AuthorNotFoundError();
      }
      const post = await postsRepository.save(createPostDto);

      return postsRepository.findOne({
        where: { id: post.id },
        relations: ['author'],
      });
    });
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    return this.dataSource.transaction(async (manager) => {
      const postsRepository = manager.getRepository(Post);

      const result = await postsRepository.update(id, updatePostDto);
      if (result.affected === 0) {
        return null;
      }

      return postsRepository.findOne({
        where: { id },
        relations: ['author'],
      });
    });
  }
}
