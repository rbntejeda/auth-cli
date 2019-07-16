import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { TrabajadorAdminComponent } from './trabajador/trabajador-admin/trabajador-admin.component';
import { TrabajadorViewComponent } from './trabajador/trabajador-view/trabajador-view.component';
import { Error404Component } from './page/error404/error404.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: 'persona',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: TrabajadorAdminComponent
      },
      {
        path: ':id',
        component: TrabajadorViewComponent
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: '404',
        component: Error404Component
      },
      {
        path: '**',
        redirectTo: '/404'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
