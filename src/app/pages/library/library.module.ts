// Vendors
import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Routings
import { LibraryRoutingModule } from './library-routing.module';

// Components
import { LibraryComponent } from 'app/pages/library/library.component';
import { AllBooksComponent } from 'app/pages/library/all-books/all-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  declarations: [
    LibraryComponent,
    AllBooksComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule
  ],
  providers: [  ]
})

export class LibraryModule { }
