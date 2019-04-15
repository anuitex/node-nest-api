// Vendors
import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
// import { Model } from 'mongoose';
// Models
import { User } from 'models/user.interface';
// Service
import { UsersService } from 'services/users.service';
import { JwtPayload } from 'models';

@Injectable()
export class AuthService {
    constructor(
        // @InjectModel('Users') private readonly userModel: Model<User>,
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {

    }

    async createToken() {
        const user: JwtPayload = { email: 'test@email.com' };
        const accessToken = this.jwtService.sign(user);
        return {
            expiresIn: 3600,
            accessToken,
        };
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return {};
    }

    async signIn(username: string): Promise<string> { // TODO
        const user: any = { username };
        return this.jwtService.sign(user);
    }

    // async validateUser(payload: any): Promise<any> { // TODO
    //     // Validate if token passed along with HTTP request
    //     // is associated with any registered account in the database
    //     // return await this.usersService.findOneByToken(token);
    //     return await this.usersService.findOneByEmail(payload.email);
    // }
}
