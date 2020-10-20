import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): true | UrlTree {
    return this.checkIsAuthenticated(state.url);
  }

  checkIsAuthenticated(url: string): true | UrlTree {
    if (this.authservice.isAuthenticated) {
      return true;
    }

    this.authservice.redirectUrl = url;
    return this.router.parseUrl('/sign-in');
  }
}
