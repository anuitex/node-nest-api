// Vendors
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
// import { BooksResponse } from 'app/shared/models/responseModels';
import { environment } from 'environments/environment.dev';

@Injectable()
export class BooksService {

  constructor(
    private http: HttpClient
  ) {

  }

  public getAllBooks(): any { // TODO
    return this.http.get(`${environment.apiUrl}/books/getAll`);
  }

  public getBook(bookId: string): any { // TODO
    return this.http.get(`${environment.apiUrl}/books/getById/` + bookId);
  }

  public delete(bookId: string): any { // TODO
    return this.http.delete(`${environment.apiUrl}/books/deleteById/` + bookId);
  }

  public updateBook(bookId: string, updatedBook: any): any { // TODO
    return this.http.put(`${environment.apiUrl}/books/updateById/` + bookId, updatedBook);
  }

  public createBook(newBook): any {
    return this.http.post(`${environment.apiUrl}/books/create`, newBook);
  }

}
