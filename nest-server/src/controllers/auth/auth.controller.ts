// Vendors
import { Controller, Post, Req, Get, UseGuards } from '@nestjs/common';
import { Request } from 'express';
// Service
import { AuthService } from 'services';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {

    }

    @Post('login')
    public login(@Req() request: any): Promise<any> {
        // console.log(request);
        return this.authService.signIn(request.body.username);
    }

    @Post('register')
    public register(): string {
        return 'Register User';
    }

    @Get('data')
    @UseGuards(AuthGuard())
    findAll(): void {
        return null;
    }

    @Get('token')
    async createToken(): Promise<any> {
        return await this.authService.createToken();
    }
}
