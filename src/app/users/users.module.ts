import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register.component';
import { SignInComponent } from './sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent },
      { path: 'sign-in', component: SignInComponent },
    ]),
  ],
  exports: [RegisterComponent, SignInComponent],
  declarations: [RegisterComponent, SignInComponent],
  providers: [],
})
export class UsersModule {}
