import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PieComponent } from './pie/pie.component';
import { HomeComponent } from './secciones/home/home.component';
import { SearchComponent } from './secciones/search/search.component';
import { ManageComponent } from './secciones/manage/manage.component';
import { TarjetaCiudadesComponent } from './secciones/tarjeta-ciudades/tarjeta-ciudades.component';
import { Error404Component } from './secciones/error404/error404.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    NavbarComponent,
    PieComponent,
    HomeComponent,
    SearchComponent,
    ManageComponent,
    TarjetaCiudadesComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
