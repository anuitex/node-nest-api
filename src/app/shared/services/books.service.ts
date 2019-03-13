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

  public getAllBooks(): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      this.http.get("../../../assets/books.json")
        .toPromise()
        .then((res) => {
          resolve(res);
        });
    });
    return promise;
  }

  public getBook(bookId: number): any { // TODO
    // let promise = new Promise((resolve, reject) => {
    //   this.http.get("../../../assets/books.json")
    //     .toPromise()
    //     .then((res) => {
    //       let books = res.books;
    //       // resolve(res);
    //     });
    // });
    // return promise;

    let booksArray;
    let book;
    return this.http.get("../../../assets/books.json").subscribe((data) => {
      booksArray = (data as any).books;
      // debugger;
      book = booksArray.find(x => x.id === bookId);
      return book;
    });
  }

}
