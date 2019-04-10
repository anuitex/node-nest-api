// Vendors
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
import { User, Author } from 'app/shared/models';
import { AuthorsResponse } from 'app/shared/models/responseModels';
// Environments
import { environment } from 'environments/environment';

@Injectable()
export class AuthorsService {

  constructor(
    private http: HttpClient
  ) {

  }

  public getAllAuthors(): Observable<any> { // TODO
    // let promise = new Promise((resolve, reject) => {
    //   this.http.get("../../../assets/authors.json")
    //     .toPromise()
    //     .then((res: AuthorsResponse) => {
    //       resolve(res);
    //     });
    // });
    // return promise;

    return this.http.get(environment.apiUrl + '/authors/getAll');
  }

  public getAuthor(authorId: number): Observable<any> { // TODO
    // let chosenAuthor;

    // let promise = new Promise((resolve, reject) => {
    //   this.http.get("../../../assets/authors.json")
    //     .toPromise()
    //     .then((res: AuthorsResponse) => {
    //       let authors = res.authors;
    //       chosenAuthor = authors.find(x => x.id === authorId);
    //       resolve(chosenAuthor);
    //     });
    // });
    // return promise;
    return this.http.get(`${environment.apiUrl}/authors/getById/` + authorId);
  }

  public delete(authorId: number): any { // TODO
    return this.http.get(`${environment.apiUrl}/authors/deleteById/` + authorId);
  }

  public createAuthor(newAuthor: any): any { // TODO
    return this.http.post(`${environment.apiUrl}/authors/create`, newAuthor);
  }

  public updateAuthor(Id: string, newAuthor: any): any { // TODO
    return this.http.put(`${environment.apiUrl}/authors/updateBy`, newAuthor);
  }
}
