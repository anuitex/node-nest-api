// Vendors
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-book',
    templateUrl: 'add-book.component.html',
    styleUrls: ['./add-book.component.scss']
})

export class AddBookComponent implements OnInit {
  public bookForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    // this.bookForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   description: ['', Validators.required],
    //   authors: ['', Validators.required],
    //   outOfLibrary: ['', Validators.required],
    //   type: ['', Validators.required]
    // });
  }
}
