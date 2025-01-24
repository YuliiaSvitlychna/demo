import { User } from '@app/users/entities/user.entity';

const fakeUser = new User();
fakeUser.id = '086fce0b-4821-4329-9ca1-39325446dbb4';
fakeUser.firstName = 'John';
fakeUser.lastName = 'Doe';
fakeUser.age = 20;

export { fakeUser };
