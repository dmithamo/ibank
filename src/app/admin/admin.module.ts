import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [DashboardComponent, UsersComponent, UserDetailsComponent, AdminComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
