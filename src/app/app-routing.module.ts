import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { AuthGuard } from './guards';

// Components
import { LoginComponent } from './pages/login/login.component';
import { LibraryComponent } from './pages/library/library.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  // { path: '',   redirectTo: '/login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  { path: 'library', component: LibraryComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
