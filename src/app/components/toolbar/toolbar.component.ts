import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

interface NavItem {
  path: string;
  name: string;
  needsAuth: boolean;
  isCTA?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  {
    path: 'transactions/all',
    name: 'transactions',
    needsAuth: true,
  },
];

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  isAuthenticated: boolean;
  constructor(public auth: AuthService) {}

  get navItems(): Array<NavItem> {
    this.auth.isAuthenticated$.subscribe((authenticated) => {
      this.isAuthenticated = authenticated;
    });
    return NAV_ITEMS.filter((n) => !n.needsAuth || this.isAuthenticated);
  }
  ngOnInit(): void {}
}
