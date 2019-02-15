// Vendors
import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Routings
import { LibraryRoutingModule } from './library-routing.module';
// Directives
// import { AlertComponent } from './shared/directives/alert/alert.component';
// Guards
// import { AuthGuard } from './shared/guards/auth.guard';
// Helpers
// import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from 'app/shared/helpers';
// Services
// import { AlertService, AuthenticationService, UserService } from 'app/shared/services';
// Containers
// import { HomeComponent } from 'app/pages/home/home.component';
// Components
// import { AppComponent } from 'app/app.component';
// import { LoginComponent } from 'app/pages/login/login.component';
// import { RegisterComponent } from 'app/pages/register/register.component';
import { LibraryComponent } from 'app/library/library.component';
import { AllBooksComponent } from 'app/library/all-books/all-books.component';
// Containers
// import { AppHeaderComponent, AppFooterComponent, FullLayoutComponent } from 'app/shared/containers';

// const APP_CONTAINERS = [ FullLayoutComponent ];

// const APP_COMPONENTS = [
//   AppHeaderComponent,
//   AppFooterComponent
// ];

@NgModule({
  declarations: [
    // AppComponent,
    // AlertComponent,
    // HomeComponent,
    // LoginComponent,
    // RegisterComponent,
    LibraryComponent,
    AllBooksComponent,
    // ...APP_COMPONENTS,
    // ...APP_CONTAINERS
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    // ReactiveFormsModule,
    // HttpClientModule,
    LibraryRoutingModule
  ],
  providers: [
    // AuthGuard,
    // AlertService,
    // AuthenticationService,
    // UserService,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  // bootstrap: [AppComponent]
})

export class LibraryModule { }
