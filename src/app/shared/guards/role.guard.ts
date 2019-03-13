// Vendors
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// Services
import { AuthenticationService } from 'app/shared/services';
import { User } from '../models';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {

  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user: User = this.authenticationService.getCurrentUser();

    if (user.userRole === next.data.role) {
      return true;
    }

    // navigate to not found page
    this.router.navigate(['/library']);
    return false;
  }

  // public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   if (this.authenticationService.getCurrentUser()) {
  //     // logged in so return true
  //     return true;
  //   }

  //   // not logged in so redirect to login page with the return url
  //   this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  //   return false;
  // }
}
