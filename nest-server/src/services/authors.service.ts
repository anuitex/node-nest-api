// Vendors
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// Models
import { Author } from 'models/interfaces';
import { AuthorDto } from 'models/dto';

@Injectable()
export class AuthorsService {
    constructor(
        @InjectModel('Authors') private readonly authorModel: Model<Author>
    ) {

    }

    public async create(authorDto: AuthorDto): Promise<Author> {
        const createdAuthor = new this.authorModel(authorDto);
        return await createdAuthor.save();
    }

    public async getAll(): Promise<Author[]> {
        return await this.authorModel.find().exec();
    }

    public async getById(id: string): Promise<Author> {
        const query = { _id: id };
        return await this.authorModel.find(query);
    }

    public async updateById(authorDto: AuthorDto, id: string): Promise<Author> { // TODOs
        const query = { _id: (id as any).id };
        console.log(query);
        return await this.authorModel.findOneAndUpdate(query, authorDto);
    }

    public async deleteById(id: string): Promise<Author> {
        const query = { _id: id };
        return await this.authorModel.findByIdAndRemove(query);
    }
}
