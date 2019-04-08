// Vendors
import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
// Models
import { UserDto } from 'models/dto';
import { User } from 'models/interfaces';
// Services
import { UsersService } from 'services/users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {

    }

    @Post('create')
    public async create(@Body() userDto: UserDto): Promise<User> {
        console.log('POST create');
        return this.usersService.create(userDto);
    }

    @Get('getAll')
    public getAll(): Promise<User[]> {
        return this.usersService.getAll();
    }

    @Get('getById/:id')
    public getById(@Param('id') id: string): Promise<User> {
        console.log('GET: ' + id);
        return this.usersService.getById(id);
    }

    @Put('updateById/:id')
    public async updateById(@Param() id: string, @Body() userDto: UserDto): Promise<User> {
        console.log('PUT: ' + id);
        return this.usersService.updateById(userDto, id);
    }

    @Delete('deleteById/:id')
    public async deleteById(@Param('id') id: string): Promise<User> {
        console.log('DELETE: ' + id);
        return this.usersService.deleteById(id);
    }
}
