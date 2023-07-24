import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllCitiesACTION, SaveCityACTION } from 'src/app/actions/city.actions';
import { City } from 'src/app/models/city.models';
import { CityService } from 'src/app/services/CityService/city.service';

@Component({
  selector: 'app-form-city',
  templateUrl: './form-city.component.html',
  styleUrls: ['./form-city.component.scss']
})
export class FormCityComponent {
  name : string = "";
constructor(private cityService : CityService){}
  onSubmit(){
    const city = new City(this.name)

    this.cityService.dispatchSaveCityAction(city)
    this.cityService.dispatchGetAllCitiesAction()
  }

}
