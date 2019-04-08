// Vendors
import { Controller, Post, Get, Param, Body, Put, Res, HttpStatus, Delete } from '@nestjs/common';
import { Response } from 'express';
// Models
import { CreateBookDto } from 'models/dto';
import { Book } from 'models/interfaces';
// Services
import { BooksService } from 'services';

@Controller('books')
export class BooksController {
    constructor(
        private readonly booksService: BooksService
    ) {

    }

    @Post('create')
    public async create(@Body() createBookDto: CreateBookDto): Promise<Book> { // TODO
        // res.json({status: HttpStatus });
        console.log('POST create');
        return this.booksService.create(createBookDto);
        // res.status(HttpStatus.CREATED).send();
        // return `Create new book`;
    }

    @Get('getAll')
    public getAll(): Promise<Book[]> {
        console.log('GET: All');
        return this.booksService.getAll();
    }

    @Get('getById/:id')
    public getById(@Param('id') id: string): Promise<Book> {
        console.log('GET: ' + id);
        return this.booksService.getById(id);
    }

    @Put('updateById/:id')
    public async updateById(@Param('id') id: string, @Body() createdBookDto: CreateBookDto): Promise<Book> {
        createdBookDto.id = String(id);
        console.log('PUT: ' + id);
        return this.booksService.updateById(createdBookDto, id);
    }

    @Delete('deleteById/:id')
    public async deleteById(@Param('id') id: string): Promise<any> {
        console.log('DELETE: ' + id);
        return this.booksService.deleteById(id);
    }

}
