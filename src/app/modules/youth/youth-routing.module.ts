import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { YouthComponent } from './components/youth/youth.component';

const routes: Routes = [
  { path: '', component: YouthComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YouthRoutingModule { }
