import { Component } from '@angular/core';
import { TiempoFavService } from 'src/app/tiempo-fav.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
    private ciudadesfavs:Array<any> = []
    private busqueda: string = ""
    constructor(private favtiempo: TiempoFavService) {
      this.ciudadesfavs= this.favtiempo.getFav()
    }

    getFav(){
      this.ciudadesfavs= this.favtiempo.getFav()
      return this.ciudadesfavs.filter((e) => e.name.toLowerCase().includes(this.busqueda.toLowerCase()))
    }

    setbusqueda(bus:any){
      this.busqueda = bus.target.value
    }

    cambiarmedida(){
      this.favtiempo.cambiarmedida()
    }
}
