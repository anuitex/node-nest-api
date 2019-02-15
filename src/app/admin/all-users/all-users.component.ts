// Vendors
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

// Models
import { User } from 'app/shared/models';

// Services
import { UserService } from 'app/shared/services';

@Component({
  templateUrl: 'all-users.component.html'
})

export class AllUsersComponent implements OnInit {
  public currentUser: User;
  public users: User[] = [];

  constructor(
    private userService: UserService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  public deleteUser(id: number): void {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers();
    });
  }

  private loadAllUsers(): void {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }
}
