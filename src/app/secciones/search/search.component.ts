import { Component } from '@angular/core';
import { DbTiempoService } from 'src/app/db-tiempo.service';
import { TiempoFavService } from 'src/app/tiempo-fav.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
    private ciudadesbuscadas:Array<any> = []
    constructor(private dbTiempo: DbTiempoService,
                private favtiempo: TiempoFavService) { }

    getTiempoCiudad(ciudad: any){
      this.ciudadesbuscadas = []
      ciudad = ciudad.target.value
      this.dbTiempo.getTiempoCiudad(ciudad)
      .subscribe((data: any) => {
        this.ciudadesbuscadas = data.list

      })
      return this.ciudadesbuscadas
    }

    getciudadesbuscadas(){
      return this.ciudadesbuscadas
    }

    addFav(id: number){
      this.favtiempo.addFav(id)
    }
}
