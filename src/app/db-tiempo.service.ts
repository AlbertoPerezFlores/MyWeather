import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbTiempoService {
  private url = "https://api.openweathermap.org/data/2.5/"
  private api = "&appid=4a2e0090acfd7a1f9b98134f2a03a9f0"
  constructor(private http: HttpClient) {

   }

    getTiempoCiudad(ciudad: string){
      return this.http.get(this.url + "find?q=" + ciudad + this.api);
    }


}
