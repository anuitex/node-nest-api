// Vendors
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Services
import { AuthorsService } from 'app/shared/services';
// Models
import { Author } from 'app/shared/models';

@Component({
  selector: 'app-add-author',
  templateUrl: 'add-author.component.html',
  styleUrls: ['./add-author.component.scss']
})

export class AddAuthorComponent implements OnInit {
  public authorForm: FormGroup;
  public submitted: Boolean = false;
  public loading: Boolean = false;
  public formCtrl: any;
  public author: Author;
  public control: FormControl = new FormControl();

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private authorsService: AuthorsService
  ) {
    // this.authorsService.getAllAuthors().then((response) => {
    //   this.authors = response.authors;
    //   console.log(response);
    // }).catch(function (e) {
    // console.log(e);
    // });

    let authorId = parseInt(this.route.snapshot.params.id, 10);

    if (authorId !== -1) {
      this.authorsService.getAuthor(authorId).subscribe((response) => {
        this.author = response;

        this.authorForm.setValue({
          firstName: this.author.firstName,
          lastName: this.author.lastName,
          // authors: this.book.authors,
          // outOfLibrary: this.book.outOfLibrary,
          // type: this.book.type
        });
      });
    }
  }

  ngOnInit() {
    this.authorForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    this.formCtrl = this.authorForm.controls;
  }

  public onSubmit(): void {
    this.submitted = true;

    this.router.navigate(['all-authors']);
  }

  public cancel(): void {
    this.location.back();
  }
}
