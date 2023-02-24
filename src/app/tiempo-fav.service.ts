import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiempoFavService {
  private idciudadesFav: Array<any> = []
  private ciudadesFav: Array<any> = []
  private default:Array<any> = []
  private celsacti:boolean = false
  private url = "https://api.openweathermap.org/data/2.5/"
  private api = "&appid=4a2e0090acfd7a1f9b98134f2a03a9f0"
  constructor(private http: HttpClient) {
    if(localStorage.getItem('ciudadesfav') != null){
      this.idciudadesFav = JSON.parse(localStorage.getItem('ciudadesfav') || '{}')
    }
    if(localStorage.getItem('defaultciudad') != null){
      this.default = JSON.parse(localStorage.getItem('defaultciudad') || '{}')
    }

    this.recogerCiudadesPorId()
   }

  addFav(id: any){
    this.idciudadesFav.push(id)
    this.recogerCiudadesPorId()

    localStorage.setItem('ciudadesfav', JSON.stringify(this.idciudadesFav));
  }

  delFav(ciudad:any){
    this.ciudadesFav = this.ciudadesFav.filter((e) => e.id !== ciudad.id)
    this.idciudadesFav = this.idciudadesFav.filter((e) => e !== ciudad.id)
  }
  getdefault(){
    if(this.default.length == 0){
      this.default.push(this.ciudadesFav[0])
    }
    return this.default
  }
  getFav(){
    return this.ciudadesFav
  }
  setdefault(ciudad:any){
    this.default = []
    this.default.push(ciudad)
    localStorage.setItem('defaultciudad', JSON.stringify(this.default));
  }
  recogerCiudadesPorId(){
    this.ciudadesFav = []
    this.idciudadesFav.forEach(element => {
      this.http.get(this.url + "weather?id=" + element +this.api).subscribe ((data: any) => {
        this.ciudadesFav.push(data)
      })
    })
  }
  defaultexist(){
    if(this.default.length == 0){
      this.getdefault()
    }
    return true
  }
  celsact(){
    return this.celsacti
  }
  cambiarmedida(){
    this.ciudadesFav.forEach(element => {
      if(this.celsacti == false){
      element.main.temp = element.main.temp - 273.15
      }else{
      element.main.temp = element.main.temp + 273.15
      }
    })
    this.celsacti = !this.celsacti
  }

}
