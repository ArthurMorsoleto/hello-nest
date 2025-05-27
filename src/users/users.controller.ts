import { Body, Controller, Delete, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./interface/users.inteface";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Post()
    create(@Body() user: User): User {
        return this.usersService.create(user);
    }

    @Delete('delete')
    delete(@Body('email') email: string): User {
        return this.usersService.delete(email);
    }
}
