// Vendors
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { first } from 'rxjs/operators';
import { Location } from '@angular/common';

// Services
import { BooksService } from 'app/shared/services';
// Models
import { Book } from 'app/shared/models';

@Component({
  selector: 'app-add-book',
  templateUrl: 'add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})

export class AddBookComponent implements OnInit {
  public bookForm: FormGroup;
  public submitted: Boolean = false;
  public loading: Boolean = false;
  public formCtrl: any;
  public book: Book;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BooksService
  ) {
    let bookId = parseInt(this.route.snapshot.params.id, 10);

    if (bookId !== -1) {
      this.bookService.getBook(bookId).then((response) => {
        this.book = response;

        this.bookForm = this.formBuilder.group({
          name: [this.book.name, Validators.required],
          description: [this.book.description, Validators.required],
          authors: [this.book.authors, Validators.required],
          outOfLibrary: [this.book.outOfLibrary, Validators.required],
          type: [this.book.type, Validators.required]
        });
      });
    }
  }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      authors: ['', Validators.required],
      outOfLibrary: ['', Validators.required],
      type: ['', Validators.required]
    });

    this.formCtrl = this.bookForm.controls;
  }

  public onSubmit(): void {
    this.submitted = true;
  }

  public cancel(): void {
    this.location.back();
  }
}
