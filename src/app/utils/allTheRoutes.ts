import { Route } from '@angular/router';
import { NotFoundComponent } from './../components/not-found/not-found.component';
import { LoginFormComponent } from './../pages/auth/login-form/login-form.component';
import { SignUpFormComponent } from './../pages/auth/sign-up-form/sign-up-form.component';
import { LandingPageComponent } from './../pages/landing-page/landing-page.component';
import { DashboardComponent } from './../pages/transactions/dashboard/dashboard.component';
import { APP_NAME } from './constants';

export interface RouteItem extends Route {
  name: string;
  hideOnNav?: boolean;
  isCTA?: boolean;
}

export const ALL_ROUTES: RouteItem[] = [
  {
    path: 'home',
    name: APP_NAME,
    component: LandingPageComponent,
  },
  { path: '', name: '', redirectTo: '/home', pathMatch: 'full' }, // expt
  {
    path: 'sign-in',
    name: 'sign in',
    component: LoginFormComponent,
  },
  {
    path: 'sign-up',
    name: 'sign up',
    component: SignUpFormComponent,
    isCTA: true,
  },
  {
    path: 'transactions',
    name: 'transactions',
    component: DashboardComponent,
    hideOnNav: true,
  },
  {
    path: '**',
    name: '',
    component: NotFoundComponent,
    hideOnNav: true,
  },
];
