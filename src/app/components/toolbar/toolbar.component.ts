import { Component, OnInit } from '@angular/core';
import { ALL_ROUTES, RouteItem } from './../../utils/allTheRoutes';
import { APP_NAME } from './../../utils/constants';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor() {}
  get navItems(): Array<RouteItem> {
    return ALL_ROUTES.filter((r) => !r.hideOnNav && r.name !== APP_NAME);
  }
  ngOnInit(): void {}
}
