import { Injectable } from '@nestjs/common';
import { User } from './interface/users.inteface';
import { identity } from 'rxjs';

@Injectable()
export class UsersService {
    private readonly users = [
        {
            id: 1,
            name: 'João da Silva',
            email: 'joaodasilva@email.com'
        },
        {
            id: 2,
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
        user.id = this.users.length + 1;
        this.users.push(user);
        return user;
    }

    findById(id: number): Promise<User> {
        const user = this.users.find(u => u.id === id);
        console.log('id', id);
        console.log(this.users);
        return user ? Promise.resolve(user) : Promise.reject(new Error('User not found'));
    }

    delete(id: number): Promise<User> {
        const userIndex = this.users.findIndex(u => u.id === id);
        if (userIndex === -1) {
            throw new Error('User not found');
        }
        const deletedUser = this.users.splice(userIndex, 1);
        return Promise.resolve(deletedUser[0]);
    }

}