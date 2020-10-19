import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

interface NavItem {
  path: string;
  name: string;
  needsAuth: boolean;
  isCTA?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  {
    path: 'admin',
    name: 'admin',
    needsAuth: true,
  },
  {
    path: 'transactions/all',
    name: 'transactions',
    needsAuth: true,
  },
  {
    path: 'sign-in',
    name: 'sign in',
    needsAuth: false,
  },
  {
    path: 'sign-up',
    name: 'sign up',
    isCTA: true,
    needsAuth: false,
  },
];

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor(public authService: AuthService) {}
  get navItems(): Array<NavItem> {
    const isAuthenticated = this.authService.isAuthenticated;
    return NAV_ITEMS.filter((n) => {
      if (!n.needsAuth) {
        return n;
      }
      if (n.needsAuth && !isAuthenticated) {
        return;
      }
    });
  }
  ngOnInit(): void {}
}
