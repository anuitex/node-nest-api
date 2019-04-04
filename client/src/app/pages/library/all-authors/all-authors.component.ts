// Vendors
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

// Models
import { Author, User } from 'app/shared/models';
// Services
import { AuthorsService, AuthenticationService } from 'app/shared/services';
// Enums
// import { UserType } from 'app/shared/enums';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.scss']
})

export class AllAuthorsComponent implements OnInit {
  public authors: Author[] = [] as Author[];
  public authorsTotalCount: number;
  public currentUser: User;
  public p: number = 1;

  constructor(
    public authorsService: AuthorsService,
    public authenticationService: AuthenticationService,
    public router: Router
  ) {
    this.currentUser = this.authenticationService.getCurrentUser();

    this.authorsService.getAllAuthors().then((response) => {
        this.authors = response.authors;
        this.authorsTotalCount = response.count;
    }).catch(function (e) {
      console.log(e);
    });
  }

  ngOnInit() {

  }

  public addNewAuthor(): void {
    this.router.navigate(['/admin/add-author', -1]);
  }

  public editAuthorDetails(authorId: number): void {
    this.router.navigate(['/admin/add-author', authorId]);
  }

  public deleteAuthor(authorId: number): void {
    let xex = this.authors.find(x => x.id === authorId);
    console.log('Author ID ' + authorId);
    console.log(xex);
  }

  public pageChange($event: number): void {
    this.p = $event;
  }
}
