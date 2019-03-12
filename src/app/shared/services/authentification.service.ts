// Vendors
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Environments
import { environment } from 'environments/environment';
// Models
import { User } from 'app/shared/models';

@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) {

  }

  public login(username: string, password: string): any {
    return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username: username, password: password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }

  public logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  public getCurrentUser(): User {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    return user;
  }
}
