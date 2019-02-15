// Vendors
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})

export class AllBooksComponent implements OnInit {

  public test: string = "All books";

  constructor() { }

  ngOnInit() {
  }

}
