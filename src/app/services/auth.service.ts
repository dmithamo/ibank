import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;
  redirectUrl: string = '/transactions/all';

  loginUser(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap((val) => (this.isAuthenticated = true))
    );
  }

  logoutUser(): void {
    this.isAuthenticated = false;
  }
}
