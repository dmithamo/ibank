import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-btn',
  templateUrl: './auth-btn.component.html',
  styleUrls: ['./auth-btn.component.css'],
})
export class AuthBtnComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
