import { Post } from '@app/posts/entities/post.entity';
import { fakeUser } from '@app/users/fakes/user.fake';

const fakePost = new Post();
fakePost.id = '086fce0b-4821-4329-9ca1-39325446dbb5';
fakePost.title = 'Hello wolrd';
fakePost.body =
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
fakePost.authorId = fakeUser.id;
fakePost.author = fakeUser;

export { fakePost };
