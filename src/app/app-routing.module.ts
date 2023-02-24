import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './secciones/error404/error404.component';
import { HomeComponent } from './secciones/home/home.component';
import { ManageComponent } from './secciones/manage/manage.component';
import { SearchComponent } from './secciones/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent},
  { path: 'search', component:SearchComponent},
  { path: 'manage', component:ManageComponent},
  { path: '**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
