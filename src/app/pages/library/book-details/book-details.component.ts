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
  public book: Book;
  // public test: string = "TEST";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BooksService
  ) {
    let bookId = parseInt(this.route.snapshot.params.id, 10);

    this.bookService.getBook(bookId).then((response) => {
      console.log(response);
      this.book = response;
    });
  }

  ngOnInit() {
    // this.book = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.service.getBook(params.get('id'))
    //     )
    // );
    // this.route.params.subscribe((data) => {
    //   debugger;
    //   let k = parseInt(data.id, 10);
    //   this.book = this.bookService.getBook(k);
    // });
  }

  public startEditBook(): void {

  }

  public goToAllBooks(): void {
    this.router.navigate(['/all-books']);
  }

}
