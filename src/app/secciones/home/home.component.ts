import { Component } from '@angular/core';
import { TiempoFavService } from 'src/app/tiempo-fav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(private favtiempo: TiempoFavService) { }

    getdefault(){
      return this.favtiempo.getdefault()
    }
    defaultexist(){
      return this.favtiempo.defaultexist()
    }
}
