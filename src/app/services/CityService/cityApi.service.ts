import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/city.models';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient) { }

  public getCities(): Observable<City[]>{
    return this.http.get<City[]>(environment.host + "cities");
  }

  public saveCity(city:City): Observable<City>{
    return this.http.post<City>(environment.host + "newCity", city)
  }
}
