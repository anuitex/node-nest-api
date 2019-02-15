// Vendors
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
// import { AuthGuard } from 'app/shared/guards';

// Components
import { AdminComponent } from 'app/admin/admin.component';
import { AllUsersComponent } from './all-users/all-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'all-users', pathMatch: 'full' },
  { path: '', component: AdminComponent,
    children: [
      { path: 'all-users', component: AllUsersComponent },
      // { path: 'edit', component: EditBookComponent },
      // { path: 'add', component: AddBookComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
