import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/modules/shared.module';
import { AppMaterialModule } from './core/modules/app-material.module';

import { AppComponent } from './app.component';
// import { LoginComponent } from './modules/login/components/login/login.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
// import { RegisterUserComponent } from './modules/login/components/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    AppMaterialModule
  ],
  exports: [
    AppMaterialModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
