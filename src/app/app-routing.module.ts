import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ALL_ROUTES } from './utils/allTheRoutes';

const routes: Routes = ALL_ROUTES;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
