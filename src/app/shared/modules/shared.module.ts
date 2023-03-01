import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/core/modules/app-material.module';

import { BottomSheetComponent } from 'src/app/shared/components/bottom-sheet/bottom-sheet.component';
import { EventComponent } from 'src/app/shared/components/event/event.component';
import { FundRaisingComponent } from '../components/fund-raising/fund-raising.component';

import { EllipsisPipe } from '../pipes/ellipsis.pipe';
// import { AccessControlDirective } from 'src/app/core/directives/access-control.directive';

@NgModule({
    declarations: [
      BottomSheetComponent,
      EventComponent,
      FundRaisingComponent,
      EllipsisPipe
    ],
    imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      ReactiveFormsModule,
      AppMaterialModule
    ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      AppMaterialModule,
      EventComponent,
      FundRaisingComponent,
      EllipsisPipe
    ],
    providers: [ ]
  })
  export class SharedModule { }
  