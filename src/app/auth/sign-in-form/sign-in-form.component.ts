import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
})
export class SignInFormComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) {}

  loginUser() {
    console.log('LOGIN U IN');
    this.authService.loginUser().subscribe(() => {
      if (this.authService.isAuthenticated) {
        this.router.navigate([this.authService.redirectUrl]);
      }
    });
  }

  ngOnInit(): void {}
}
