import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { YouthRoutingModule } from './youth-routing.module';

import { YouthComponent } from './components/youth/youth.component';

@NgModule({
  declarations: [
    YouthComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    YouthRoutingModule
  ]
})
export class YouthModule { }
