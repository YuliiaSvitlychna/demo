import { Controller } from '@nestjs/common';
import { Crud } from '@dataui/crud';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Crud({
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  model: {
    type: User,
  },
})
@Controller('users')
export class UsersController {
  constructor(public service: UsersService) {}
}
