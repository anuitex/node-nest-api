// Vendors
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Routings
import { AdminRoutingModule } from 'app/pages/admin/admin-routing.module';
// Components
import { AdminComponent } from 'app/pages/admin/admin.component';
import { AllUsersComponent } from 'app/pages/admin/all-users/all-users.component';
import { AddBookComponent } from 'app/pages/admin/add-book/add-book.component';
import { EditBookComponent } from 'app/pages/admin/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AdminComponent,
    AllUsersComponent,
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  providers: [  ]
})

export class AdminModule { }
