// Vendors
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
// Models
import { AuthorDto } from 'models/dto';
import { Author } from 'models/interfaces';
// Services
import { AuthorsService } from 'services/authors.service';

@Controller('authors')
export class AuthorsController {
    constructor(
        private readonly authorsService: AuthorsService
    ) {

    }

    @Post('create')
    public async create(@Body() authorDto: AuthorDto): Promise<Author> {
        console.log('POST create');
        return this.authorsService.create(authorDto);
    }

    @Get('getAll')
    public getAll(): Promise<Author[]> {
        return this.authorsService.getAll();
    }

    @Get('getById/:id')
    public getById(@Param('id') id: string): Promise<Author> {
        console.log('GET: ' + id);
        return this.authorsService.getById(id);
    }

    @Put('updateById/:id')
    public async updateById(@Param() id: string, @Body() authorDto: AuthorDto): Promise<Author> {
        console.log('PUT: ' + id);
        return this.authorsService.updateById(authorDto, id);
    }

    @Delete('deleteById/:id')
    public async deleteById(@Param('id') id: string): Promise<Author> {
        console.log('DELETE: ' + id);
        return this.authorsService.deleteById(id);
    }
}
