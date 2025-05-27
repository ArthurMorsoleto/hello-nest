import { Injectable } from '@nestjs/common';
import { User } from './interface/users.inteface';

@Injectable()
export class UsersService {
    private readonly users = [
        {
            name: 'João da Silva',
            email: 'joaodasilva@email.com'
        },
        {
            name: 'Maria da Silva',
            email: 'mariadasilva@email.com'
        }
    ];

    create(user: User) {
        this.users.push(user);
        return user;
    }

    findAll(): Promise<User[]> {
        return Promise.resolve(this.users);
    }
}