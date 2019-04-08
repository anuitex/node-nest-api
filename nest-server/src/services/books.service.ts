// Vendors
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { Response } from 'express';
// Models
import { Book } from 'models/book.interface';

@Injectable()
export class BooksService {

    constructor(
        @InjectModel('Books') private readonly bookModel: Model<Book>
    ) {

    }

    public async create(book: Book): Promise<Book> {
        const createdBook = new this.bookModel(book);
        return await createdBook.save();
    }

    public async getAll(): Promise<Book[]> {
        return await this.bookModel.find().exec();
    }

    public async getById(id: string): Promise<Book> {
        const query = { _id: id };
        return await this.bookModel.find(query);
    }

    public async updateById(book: Book, id: string): Promise<Book> { // TODOs
        const query = { _id: id };
        // console.log('Service update: ' + createdBookDto.id);
        // return await this.bookModel.findOneAndUpdate(query, { name: 'BAZINGA' });
        return await this.bookModel.findOneAndUpdate(query, book);
    }

    public async deleteById(id: string): Promise<any> {
        const query = { _id: (id as any).id };
        console.log('Service delete: ' + query);
        return await this.bookModel.findByIdAndRemove(query);
    }
}
