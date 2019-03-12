// Vendors
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
// import { AuthGuard } from 'app/shared/guards';

// Components
import { AdminComponent } from 'app/admin/admin.component';
import { AllUsersComponent } from 'app/admin/all-users/all-users.component';
import { AddBookComponent } from 'app/admin/add-book/add-book.component';
import { EditBookComponent } from 'app/admin/edit-book/edit-book.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'all-users',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'all-users', component: AllUsersComponent },
      { path: 'edit-book', component: EditBookComponent },
      { path: 'add-book', component: AddBookComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
