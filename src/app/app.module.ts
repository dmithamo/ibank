import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ButtonComponent } from './components/button/button.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { LogoComponent } from './components/logo/logo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeModule } from './home/home.module';
import { MaterialUIModule } from './material-ui/material-ui.module';
import { TransactionsModule } from './transactions/transactions.module';

@NgModule({
  declarations: [
    AppComponent,
    CopyrightComponent,
    ToolbarComponent,
    NotFoundComponent,
    LogoComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialUIModule,
    TransactionsModule,
    AuthModule,
    HomeModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
