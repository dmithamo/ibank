import { Component, OnInit } from '@angular/core';

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
];

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor() {}
  get navItems(): Array<NavItem> {
    return NAV_ITEMS;
  }
  ngOnInit(): void {}
}
