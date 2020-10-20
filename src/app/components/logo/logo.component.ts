import { Component, OnInit } from '@angular/core';
import { APP_NAME } from './../../utils/constants';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent implements OnInit {
  constructor() {}

  get appName() {
    return APP_NAME;
  }

  ngOnInit(): void {}
}
