import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column({ nullable: true })
  authorId: number;

  @ManyToOne(() => User, (user) => user.posts, {
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
  })
  author: User | null;
}
