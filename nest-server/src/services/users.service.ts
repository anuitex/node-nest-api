// Vendors
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// Models
import { User } from 'models/user.interface';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('Users') private readonly userModel: Model<User>
    ) {

    }

    public async create(user: User): Promise<User> {
        const createdUser = new this.userModel(user);
        return await createdUser.save();
    }

    public async getAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    public async getById(id: string): Promise<User> {
        const query = { _id: id };
        return await this.userModel.find(query);
    }

    public async updateById(user: User, id: string): Promise<User> { // TODOs
        const query = { _id: (id as any).id };
        // console.log('Service update: ' + createdBookDto.id);
        // return await this.bookModel.findOneAndUpdate(query, { name: 'BAZINGA' });
        return await this.userModel.findOneAndUpdate(query, user);
    }

    public async deleteById(id: string): Promise<User> {
        const query = { _id: id };
        return await this.userModel.findByIdAndRemove(query);
    }

    public async findOneByToken(token: any): Promise<User> {
        const query = { token };
        return await this.userModel.find(query);
    }

    public async findOneByEmail(email: string): Promise<User> {
        const query = { email };
        return await this.userModel.find(query);
    }

}
