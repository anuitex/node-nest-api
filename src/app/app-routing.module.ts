// Vendors
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { AuthGuard } from 'app/shared/guards';

// Components
import { LoginComponent } from 'app/pages/login/login.component';
import { RegisterComponent } from 'app/pages/register/register.component';
import { FullLayoutComponent } from 'app/shared/containers';

const routes: Routes = [
  // { path: '',   redirectTo: '/login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  // { path: 'library', component: LibraryComponent },
  // {
  //   path: '',
  //   component: HomeComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'library',
    component: FullLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: 'app/pages/library/library.module#LibraryModule'
  },
  {
    path: 'admin',
    component: FullLayoutComponent,
    canActivate: [AuthGuard],
    loadChildren: 'app/pages/admin/admin.module#AdminModule'
  },

  // otherwise redirect to home
  { path: '**', redirectTo: 'library' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
