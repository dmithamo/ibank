import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [LoginFormComponent, SignUpFormComponent],
  exports: [LoginFormComponent, SignUpFormComponent],
  imports: [CommonModule],
})
export class AuthModule {}
