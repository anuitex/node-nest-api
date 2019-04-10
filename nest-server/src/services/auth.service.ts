// Vendors
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// Models
import { User } from 'models/user.interface';
// Service
import { UsersService } from 'services/users.service';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel('Users') private readonly userModel: Model<User>,
        private readonly usersService: UsersService
    ) {

    }

    async validateUser(token: string): Promise<any> {
        // Validate if token passed along with HTTP request
        // is associated with any registered account in the database
        // return await this.usersService.findOneByToken(token);
    }
}
