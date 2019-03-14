// Vendors
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Location } from '@angular/common';

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

  constructor(
    private formBuilder: FormBuilder,
    private location: Location
  ) {

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
