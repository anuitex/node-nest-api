// Vendors
import { Controller, Post, Req, Get } from '@nestjs/common';
import { Request } from 'express';

@Controller('auth')
export class AuthController {

    @Post('login')
    public login(@Req() request: Request): string {
        return 'Login User';
    }

    @Post('register')
    public register(): string {
        return 'Register User';
    }
}
