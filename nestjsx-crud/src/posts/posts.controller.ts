import { Controller } from '@nestjs/common';
import { Crud } from '@dataui/crud';
import { Post } from './entities/post.entity';
import { PostsService } from './posts.service';

@Crud({
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  model: {
    type: Post,
  },
})
@Controller('posts')
export class PostsController {
  constructor(public service: PostsService) {}
}
