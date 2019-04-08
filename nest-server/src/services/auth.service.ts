// Vendors
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// Models
import { User } from 'models/user.interface';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel('Users') private readonly userModel: Model<User>
    ) {

    }
}
