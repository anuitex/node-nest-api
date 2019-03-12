// Vendors
import { Component, OnInit } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
// Models
import { Book, User } from 'app/shared/models';
// Services
import { BooksService } from 'app/shared/services';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})

export class AllBooksComponent implements OnInit {
  public test: string = "All books";
  public booksArray: Book[];
  public currentUser: User;

  constructor(
    public booksService: BooksService,
    public router: Router
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);

    this.booksService.getAllBooks().subscribe((data) => {
      this.booksArray = data.books;
      console.log(this.booksArray);
    });

  }

  ngOnInit() {

  }

  public showBookDetails(id: number): void {
    // debugger;
    this.router.navigate(['/library/book-details', id]);
  }



}
