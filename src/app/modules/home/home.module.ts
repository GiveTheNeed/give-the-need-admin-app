import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { BannerComponent } from './components/banner/banner.component';
import { AddBannerComponent } from './components/add-banner/add-banner.component';

@NgModule({
  declarations: [
    BannerComponent,
    AddBannerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
