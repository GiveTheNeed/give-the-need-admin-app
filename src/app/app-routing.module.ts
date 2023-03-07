import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/components/login/login.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'youth', loadChildren: () => import('./modules/youth/youth.module').then(m => m.YouthModule) },
  { path: 'community-services', loadChildren: () => import('./modules/event/event.module').then(m => m.EventModule) },
  { path: 'blogs', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule), pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'error', loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }