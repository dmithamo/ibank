import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [LandingPageComponent, UserDashboardComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {
  constructor() {}
}
