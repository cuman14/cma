import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: ()=> import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'content',
    loadChildren: ()=> import('./modules/content/content.module').then(m => m.ContentModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
