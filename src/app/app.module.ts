import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AuthModule } from './features/auth/auth.module';
import { MaterialUIModule } from './material-ui/material-ui.module';

@NgModule({
  declarations: [AppComponent, CopyrightComponent, ToolbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    MaterialUIModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
