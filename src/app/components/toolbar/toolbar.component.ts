import { Component, OnInit } from '@angular/core';

interface NavItem {
  path: string;
  name: string;
  isCTA?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  {
    path: 'transactions/all',
    name: 'transactions',
  },
  {
    path: 'sign-in',
    name: 'sign in',
  },
  {
    path: 'sign-up',
    name: 'sign up',
    isCTA: true,
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
