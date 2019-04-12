// Vendors
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

// Models
import { Book, User } from 'app/shared/models';
// Services
import { BooksService, AuthenticationService } from 'app/shared/services';
// Enums
import { UserType } from 'app/shared/enums';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})

export class AllBooksComponent implements OnInit {
  public books: Book[] = [] as Book[];
  public booksTotalCount: number;
  public currentUser: User;
  public p: number = 1;

  constructor(
    public booksService: BooksService,
    public authenticationService: AuthenticationService,
    public router: Router
  ) {
    this.currentUser = this.authenticationService.getCurrentUser();

    this.booksService.getAllBooks().subscribe((res) => {
        this.books = res;
        this.booksTotalCount = res.length;
        console.log(res);
    });
  }

  ngOnInit() {

  }

  public addNewBook(): void {
    this.router.navigate(['/admin/add-book', -1]);
  }

  public addNewAuthor(): void {
    this.router.navigate(['/admin/add-author', -1]);
  }

  public showBookDetails(id: number): void {
    this.router.navigate(['/library/book-details', id]);
  }

  public pageChange($event: number): void {
    this.p = $event;
  }
}
