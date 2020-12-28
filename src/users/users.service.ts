import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'Abu',
        password: '1234',
        email: 'abu@abc.com',
      },
      {
        userId: 2,
        username: 'Ali',
        password: '4321',
        email: 'ali@xyz.com',
      },
      {
        userId: 3,
        username: 'Siti',
        password: '1q2w',
        email: 'siti@qaz.com',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
