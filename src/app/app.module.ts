import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthBtnComponent } from './components/auth-btn/auth-btn.component';
import { ButtonComponent } from './components/button/button.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoComponent } from './components/logo/logo.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
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
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthBtnComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
    MaterialUIModule,
    TransactionsModule,
    HomeModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
