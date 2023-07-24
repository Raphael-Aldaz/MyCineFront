import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable,map,mergeMap,tap } from 'rxjs';
import { GetAllCitiesACTION } from 'src/app/actions/city.actions';
import { City } from 'src/app/models/city.models';
import { CityService } from 'src/app/services/CityService/city.service';
import { CityState } from 'src/app/state/city.state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  cities: City[]| null = null;
  constructor(private store : Store<any>, private cityService : CityService){
    this.cityService.cities$?.subscribe({
      next : (data) => {
        this.cities = data
      },
      error : (error) => console.log(error)
    })
  }

  ngOnInit(): void {
      this.store.dispatch(new GetAllCitiesACTION({}));
  }
}
