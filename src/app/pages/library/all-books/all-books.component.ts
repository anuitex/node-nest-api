// Vendors
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

// Models
import { Book, User } from 'app/shared/models';
// Services
import { BooksService, AuthenticationService } from 'app/shared/services';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})

export class AllBooksComponent implements OnInit {
  public books: Book[] = [] as Book[];
  public currentUser: User;

  constructor(
    public booksService: BooksService,
    public authenticationService: AuthenticationService,
    public router: Router
  ) {
    this.currentUser = this.authenticationService.getCurrentUser();

    this.booksService.getAllBooks().then((response) => {
        this.books = response.books;
    });
  }

  ngOnInit() {

  }

  public showBookDetails(id: number): void {
    this.router.navigate(['/library/book-details', id]);
  }
}
