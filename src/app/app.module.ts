// Vendors
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Routings
import { AppRoutingModule } from './app-routing.module';
// Directives
import { AlertComponent } from './shared/directives/alert/alert.component';
// Guards
import { AuthGuard } from './shared/guards/auth.guard';
// Helpers
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from 'app/shared/helpers';
// Services
import { AlertService, AuthenticationService, UserService } from 'app/shared/services';
// Containers
// import { HomeComponent } from 'app/pages/home/home.component';
// Components
import { AppComponent } from 'app/app.component';
import { LoginComponent } from 'app/pages/login/login.component';
import { RegisterComponent } from 'app/pages/register/register.component';
// import { AllBooksComponent } from 'app/library/all-books/all-books.component';
// Containers
import { AppHeaderComponent, AppFooterComponent, FullLayoutComponent } from 'app/shared/containers';

const APP_CONTAINERS = [ FullLayoutComponent ];

const APP_COMPONENTS = [
  AppHeaderComponent,
  AppFooterComponent
];

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    // HomeComponent,
    LoginComponent,
    RegisterComponent,
    // AllBooksComponent,
    ...APP_COMPONENTS,
    ...APP_CONTAINERS
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
