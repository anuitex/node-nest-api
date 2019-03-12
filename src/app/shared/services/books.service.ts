// Vendors
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BooksService {

  constructor(
    private http: HttpClient
  ) {

  }

  public getAllBooks(): any {
    return this.http.get("../../../assets/books.json");
  }

  public getBook(bookId: number): any { // TODO
    let booksArray;
    this.http.get("../../../assets/books.json").subscribe((data) => {
      booksArray = data;
      console.log(booksArray);
    });
    booksArray.find(x => x.id === bookId);
  }
}
