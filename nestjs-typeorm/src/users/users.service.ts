import { Injectable } from '@nestjs/common';
import { InjectRepository, InjectDataSource } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    @InjectDataSource()
    private dataSource: DataSource,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find({ relations: ['posts'] });
  }

  async findOne(id: string): Promise<User | null> {
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: ['posts'],
    });
    return user;
  }

  async remove(id: string) {
    return this.usersRepository.delete(id);
  }

  async create(createUserDto: CreateUserDto) {
    const user = await this.usersRepository.save(createUserDto);
    user.posts = [];
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.dataSource.transaction(async (manager) => {
      const usersRepository = manager.getRepository(User);

      const result = await usersRepository.update(id, updateUserDto);
      if (result.affected === 0) {
        return null;
      }

      return usersRepository.findOne({
        where: { id },
        relations: ['posts'],
      });
    });
  }
}
