// Vendors
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
// import { AuthGuard } from 'app/shared/guards';

// Components
import { LibraryComponent } from 'app/library/library.component';
import { AllBooksComponent } from 'app/library/all-books/all-books.component';
// import { HomeComponent } from 'app/pages/home/home.component';
// import { RegisterComponent } from 'app/pages/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'all-books', pathMatch: 'full' },
  { path: '', component: LibraryComponent,
    children: [
      { path: 'all-books', component: AllBooksComponent },
      // { path: 'edit', component: EditBookComponent },
      // { path: 'add', component: AddBookComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LibraryRoutingModule { }
