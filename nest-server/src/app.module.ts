// Vendor
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// Controllers
import { AppController } from 'app.controller';
import { BooksController } from 'controllers/books/books.controller';
import { AuthController } from 'controllers/auth/auth.controller';
import { UsersController } from 'controllers/users/users.controller';
import { AuthorsController } from 'controllers/authors/authors.controller';
// Services
import { AppService } from 'app.service';
import { BooksService, AuthService, AuthorsService, UsersService } from 'services';
// Schemas
import { BookSchema, UserSchema, AuthorSchema } from 'schemas';
// Providers
import { databaseProvider } from 'providers/database.providers';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ilibrary'),
    MongooseModule.forFeature([
      { name: 'Books', schema: BookSchema },
      { name: 'Users', schema: UserSchema},
      { name: 'Authors', schema: AuthorSchema }
    ])
  ],
  controllers: [
    AppController,
    BooksController,
    AuthController,
    UsersController,
    AuthorsController
  ],
  providers: [
    AppService,
    BooksService,
    AuthService,
    AuthorsService,
    UsersService,
    // ...databaseProvider
  ],
  exports: [
    // ...databaseProvider
  ]
})
export class AppModule {}
