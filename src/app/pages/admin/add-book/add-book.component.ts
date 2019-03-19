// Vendors
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Services
import { BooksService, AuthorsService } from 'app/shared/services';
// Models
import { Book, Author } from 'app/shared/models';

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
  public authors: Author[];
  public dropdownList: Author[] = [];
  public selectedItems: Author[] = [];
  public dropdownSettings: Object = {};

  public control: FormControl = new FormControl();

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BooksService,
    private authorsService: AuthorsService
  ) {
    this.authorsService.getAllAuthors().then((response) => {
      this.authors = response.authors;
      console.log(response);
    }).catch(function (e) {
    console.log(e);
    });

    let bookId = parseInt(this.route.snapshot.params.id, 10);

    if (bookId !== -1) {
      this.bookService.getBook(bookId).then((response) => {
        this.book = response;

        this.bookForm.setValue({
          name: this.book.name,
          description: this.book.description,
          authors: this.book.authors,
          outOfLibrary: this.book.outOfLibrary,
          type: this.book.type
        });
      });
    }
  }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      authors: [[], Validators.required],
      outOfLibrary: ['', Validators.required],
      type: ['', Validators.required]
    });

    this.formCtrl = this.bookForm.controls;

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'firstName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true,
      placeholder: 'Select authors'
    };

    this.dropdownList = [
      { id: 1, firstName: 'John', lastName: 'Doe' },
      { id: 2, firstName: 'Jane', lastName: 'Doe' },
      { id: 3, firstName: 'Govard', lastName: 'Lavcraft' },
      { id: 4, firstName: 'Joahn', lastName: 'Rouling' },
      { id: 5, firstName: 'Barb', lastName: 'Hendi' },
      { id: 6, firstName: 'Den', lastName: 'Braun' },
      { id: 7, firstName: 'Mark', lastName: 'Twen' }
    ];
  }

  public onSubmit(): void {
    this.submitted = true;

    this.router.navigate(['all-books']);
  }

  public cancel(): void {
    this.location.back();
  }

  public onItemSelect(item: any): void {
    console.log(item);
  }

  public onSelectAll(items: any): void {
    console.log(items);
  }
}
