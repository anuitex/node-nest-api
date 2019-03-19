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

  public getAllAuthors(): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      this.http.get("../../../assets/authors.json")
        .toPromise()
        .then((res: AuthorsResponse) => {
          resolve(res);
        });
    });
    return promise;
  }

  public getAuthor(authorId: number): Promise<any> {
    let chosenAuthor;

    let promise = new Promise((resolve, reject) => {
      this.http.get("../../../assets/authors.json")
        .toPromise()
        .then((res: AuthorsResponse) => {
          let authors = res.authors;
          chosenAuthor = authors.find(x => x.id === authorId);
          resolve(chosenAuthor);
        });
    });
    return promise;
  }

  public delete(authorId: number): any { // TODO

  }
}
