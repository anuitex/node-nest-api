// Vendors
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
import { BooksResponse } from 'app/shared/models/responseModels';

@Injectable()
export class BooksService {

  constructor(
    private http: HttpClient
  ) {

  }

  public getAllBooks(): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      this.http.get("../../../assets/books.json")
        .toPromise()
        .then((res: BooksResponse) => {
          resolve(res);
        });
    });
    return promise;
  }

  public getBook(bookId: number): any { // TODO
    let chosenBook;

    let promise = new Promise((resolve, reject) => {
      this.http.get("../../../assets/books.json")
        .toPromise()
        .then((res: BooksResponse) => {
          let books = res.books;
          chosenBook = books.find(x => x.id === bookId);
          resolve(chosenBook);
        });
    });
    return promise;

    // let booksArray;
    // let book;
    // return this.http.get("../../../assets/books.json").subscribe((data) => {
    //   booksArray = (data as any).books;
    //   // debugger;
    //   book = booksArray.find(x => x.id === bookId);
    //   return book;
    // });
  }

}
