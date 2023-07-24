import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { GetAllCitiesACTION, SaveCityACTION } from 'src/app/actions/city.actions';
import { City } from 'src/app/models/city.models';


@Injectable({
  providedIn: 'root'
})
export class CityService {

  cities$: Observable<City[]> | null = this.store.select((state) => state.state.city);
  constructor(private store : Store<any>) {
  }

  dispatchGetAllCitiesAction(){
   this.store.dispatch(new GetAllCitiesACTION({}))
  }
  dispatchSaveCityAction(city : City){
    this.store.dispatch(new SaveCityACTION(city))
  }
}
