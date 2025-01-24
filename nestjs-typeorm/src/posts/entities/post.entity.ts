import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '@app/users/entities/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column({ nullable: true })
  authorId: string;

  @ManyToOne(() => User, (user) => user.posts, {
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
  })
  author: User | null;
}
