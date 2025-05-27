import { Injectable } from '@nestjs/common';
import { User } from './interface/users.inteface';
import { identity } from 'rxjs';

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

    findAll(): Promise<User[]> {
        return Promise.resolve(this.users);
    }

    create(user: User) {
        if (user.name == "" || user.email == "") {
            throw new Error('Name and email are required');
        }
        if (this.users.find(u => u.email === user.email)) {
            throw new Error('Email already exists');
        }
        this.users.push(user);
        return user;
    }

    delete(email: string) { // TODO: Implement delete user by id
        const userIndex = this.users.findIndex(u => u.email === email);
        console.log('userIndex:' + userIndex);
        console.log('users:' + this.users);
        console.log('email:' + email);

        if (userIndex === -1) {
            throw new Error('User not found');
        }
        const deletedUser = this.users.splice(userIndex, 1);
        return deletedUser[0];
    }

}