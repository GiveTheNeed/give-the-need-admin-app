import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { YouthRoutingModule } from './youth-routing.module';

import { YouthComponent } from './components/youth/youth.component';
import { AddYouthOrTutorComponent } from './components/add-youth-or-tutor/add-youth-or-tutor.component';

@NgModule({
  declarations: [
    YouthComponent,
    AddYouthOrTutorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    YouthRoutingModule
  ]
})
export class YouthModule { }
