import { Component, OnInit } from '@angular/core';

interface NavItem {
  path: string;
  name: string;
}

const adminNavItems: NavItem[] = [
  { path: './', name: 'dashboard' },
  { path: './users', name: 'users' },
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  navItems: NavItem[];

  constructor() {
    this.navItems = adminNavItems;
  }

  ngOnInit(): void {}
}
