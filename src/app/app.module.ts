import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './helpers/fake-backend';

import { AppRoutingModule } from './app-routing.module';

import { AlertComponent } from './directives/alert/alert.component';
import { AuthGuard } from './guards/auth.guard';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { AlertService, AuthenticationService, UserService } from './services';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LibraryComponent } from './pages/library/library.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LibraryComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
