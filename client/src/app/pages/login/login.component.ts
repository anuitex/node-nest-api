// Vendors
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { first } from "rxjs/operators";
// import { Observable } from "rxjs";
// import { JwtHelperService } from '@auth0/angular-jwt';
// import * as jwt_decode from 'jwt-decode';

// Services
import { AlertService, AuthenticationService } from "app/shared/services";
// Models
// import { User } from "app/shared/models";

@Component({
  templateUrl: "login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loading: boolean = false;
  public submitted: boolean = false;
  public returnUrl: string;
  public formCtrl: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    // private jwtHelper: JwtHelperService
  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
    // reset login status
    this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/admin";

    this.formCtrl = this.loginForm.controls;
  }

  private onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.authenticationService
      .login(this.formCtrl.username.value, this.formCtrl.password.value)
      .subscribe(
        (data: any) => {
          // let decodedToken = jwt_decode(data.token);
          // localStorage.setItem('currentUser', decodedToken);
          debugger;
          this.router.navigate([this.returnUrl]);
        },
        error => {
          debugger;

          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
