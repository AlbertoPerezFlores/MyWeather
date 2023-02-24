import { Component, Input } from '@angular/core';
import { TiempoFavService } from 'src/app/tiempo-fav.service';

@Component({
  selector: 'app-tarjeta-ciudades',
  templateUrl: './tarjeta-ciudades.component.html',
  styleUrls: ['./tarjeta-ciudades.component.css']
})
export class TarjetaCiudadesComponent {
  @Input() ciudad: any;

  constructor(private favtiempo: TiempoFavService) { }

  delFav(ciudad:any){
    this.favtiempo.delFav(ciudad)
  }

  setdefault(ciudad:any){
    this.favtiempo.setdefault(ciudad)
  }
  celsact(){
    return this.favtiempo.celsact()
  }


}
