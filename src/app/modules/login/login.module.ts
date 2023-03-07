import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { LoginRoutingModule } from './login-routing.module';

import { RegisterUserComponent } from './components/register-user/register-user.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterUserComponent
    // RegisterUserComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    LoginRoutingModule
  ],
  exports: [
    CoreModule,
    SharedModule
  ]
})
export class LoginModule { }
