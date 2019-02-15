// Vendors
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Models
import { User } from 'app/shared/models';
// Environments
import { environment } from 'environments/environment';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) {

  }

  public getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  public getById(id: number) {
    return this.http.get(`${environment.apiUrl}/users/` + id);
  }

  public register(user: User) {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }

  public update(user: User) {
    return this.http.put(`${environment.apiUrl}/users/` + user.id, user);
  }

  public delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/users/` + id);
  }
}
