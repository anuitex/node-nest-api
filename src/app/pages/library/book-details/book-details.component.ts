// Vendors
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

// Models
import { Book, User } from 'app/shared/models';
// Services
import { BooksService, AuthenticationService } from 'app/shared/services';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})

export class BookDetailsComponent implements OnInit {
  public book: Book;
  public currentUser: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BooksService,
    private authenticationService: AuthenticationService
  ) {
    let bookId = parseInt(this.route.snapshot.params.id, 10);

    this.bookService.getBook(bookId).then((response) => {
      // console.log(response);
      this.book = response;
    });

    this.currentUser = this.authenticationService.getCurrentUser();
    // console.log(this.currentUser);
  }

  ngOnInit() {

  }

  public editBook(): void {
    console.log('Edit book func');
    this.router.navigate(['/admin/add-book', this.book.id]);
  }

  public goToAllBooks(): void {
    this.router.navigate(['/all-books']);
  }

}
