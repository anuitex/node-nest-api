// Vendors
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { map } from "rxjs/operators";
// import { Observable } from "rxjs";
import * as jwt_decode from "jwt-decode";

// Environments
import { environment } from "environments/environment";
// Services
// import { AlertService } from './';
import { AlertService } from '.';
// Models
import { User } from "app/shared/models";

@Injectable()
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) {

  }

  // public login(username: string, password: string): Observable<User> {
  //   return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username: username, password: password })
  //     .pipe(map(user => {
  //       // login successful if there's a jwt token in the response
  //       if (user && user.token) {
  //         // store user details and jwt token in local storage to keep user logged in between page refreshes
  //         localStorage.setItem('currentUser', JSON.stringify(user));
  //       }

  //       return user;
  //     }));
  // }

  public login(username: string, password: string) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const options: any = { headers: headers };
    let user = this.http.post(`${environment.apiUrl}/auth/login`, { username, password }, options);

    user.subscribe(
      (data: any) => {
        let decodedToken = jwt_decode(data.token);
        console.log(decodedToken);
        localStorage.setItem("currentUser", decodedToken);
        return data;
      },
      (error) => {
        this.alertService.error(error);
      });

      return user;
    // .pipe(map((user: User) => {
    //   console.log(user);
    //   // login successful if there's a jwt token in the response
    //   if (user && user.token) {
    //     // store user details and jwt token in local storage to keep user logged in between page refreshes
    //     localStorage.setItem('currentUser', JSON.stringify(user));
    //   }
    //   console.log(user);
    //   return user;
    // })).toPromise();
  }

  public logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
  }

  public getCurrentUser(): User {
    let user = JSON.parse(localStorage.getItem("currentUser"));
    return user;
  }
}
