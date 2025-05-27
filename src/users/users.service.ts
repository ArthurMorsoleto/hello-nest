import { Injectable } from '@nestjs/common';

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

    create(user) {
        this.users.push(user);
        return user;
    }

    findAll() {
        return this.users;
    }
}