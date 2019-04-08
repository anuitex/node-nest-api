// Vendors
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { Response } from 'express';
// Models
import { Book } from 'models/interfaces/book.interface';
import { CreateBookDto } from 'models/dto/create-book.dto';

@Injectable()
export class BooksService {
    // public test: Book = {} as Book;

    constructor(
        @InjectModel('Book') private readonly bookModel: Model<Book>
    ) {

    }

    public async create(createBookDto: CreateBookDto): Promise<Book> {
        const createdBook = new this.bookModel(createBookDto);
        return await createdBook.save();
    }

    public async getAll(): Promise<Book[]> {
        return await this.bookModel.find().exec();
    }

    public async getById(id: string): Promise<Book> {
        const query = { _id: id };
        return await this.bookModel.find(query);
    }

    public async updateById(createdBookDto: CreateBookDto, id: string): Promise<Book> { // TODOs
        const query = { _id: id };
        // console.log('Service update: ' + createdBookDto.id);
        // return await this.bookModel.findOneAndUpdate(query, { name: 'BAZINGA' });
        return await this.bookModel.findOneAndUpdate(query, createdBookDto);
    }

    public async deleteById(id: string): Promise<any> {
        const query = { _id: (id as any).id };
        console.log('Service delete: ' + query);
        return await this.bookModel.findByIdAndRemove(query);
    }
}
