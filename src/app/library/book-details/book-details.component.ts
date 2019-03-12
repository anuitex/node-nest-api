// Vendors
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// Models
import { Book } from 'app/shared/models';
// Services
import { BooksService } from 'app/shared/services';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})

export class BookDetailsComponent implements OnInit {
  public test: string = "Book details";
  // public currentUser: User;
  public book: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BooksService
  ) {
    // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // console.log(this.currentUser);

    // this.booksService.getBooks().subscribe((data) => {
    //   this.booksArray = data.books;
    //   console.log(this.booksArray);
    // });

  }

  ngOnInit() {
    // this.book = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.getBook(params.get('id')))
    // );
    console.log(this.route.paramMap);
    let result = this.bookService.getBook(1);
    console.log(result);
  }

  public goToAllBooks(): void {
    this.router.navigate(['/all-books']);
  }

}
