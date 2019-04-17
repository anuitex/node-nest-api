// Vendors
import { Controller, Post, Req, Get, UseGuards, Body } from '@nestjs/common';
import { Request } from 'express';
// Service
import { AuthService } from 'services';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }): Promise<{token: string}> {
    const token = await this.authService.signIn(body.username, body.password);
    return {
      token
    };
  }

  // @Post('register')
  // public register(): string {
  //     return 'Register User';
  // }

  @Get('data')
  @UseGuards(AuthGuard())
  findAll(): void {
    return null;
  }

  // @Get('token')
  // async createToken(): Promise<any> {
  //     return await this.authService.createToken();
  // }
}
