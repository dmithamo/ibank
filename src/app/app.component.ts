import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { APP_NAME } from './utils/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = APP_NAME;
  constructor(public auth: AuthService) {}
}
