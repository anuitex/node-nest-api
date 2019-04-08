// Vendors
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// Models
import { User } from 'models/interfaces/user.interface';
import { UserDto } from 'models/dto/user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('Users') private readonly userModel: Model<User>
    ) {

    }

    public async create(userDto: UserDto): Promise<User> {
        const createdUser = new this.userModel(userDto);
        return await createdUser.save();
    }

    public async getAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    public async getById(id: string): Promise<User> {
        const query = { _id: id };
        return await this.userModel.find(query);
    }

    public async updateById(userDto: UserDto, id: string): Promise<User> { // TODOs
        const query = { _id: (id as any).id };
        // console.log('Service update: ' + createdBookDto.id);
        // return await this.bookModel.findOneAndUpdate(query, { name: 'BAZINGA' });
        return await this.userModel.findOneAndUpdate(query, userDto);
    }

    public async deleteById(id: string): Promise<User> {
        const query = { _id: id };
        return await this.userModel.findByIdAndRemove(query);
    }

}
