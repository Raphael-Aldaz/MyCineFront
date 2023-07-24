import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { Observable, mergeMap, map, catchError, of, concatMap, tap } from "rxjs";
import { CityActionType, GetAllCitiesACTION, GetAllCitiesErrorACTION, GetAllCitiesSuccesACTION, SaveCityACTION, SaveCityErrorACTION, SaveCitySuccesACTION } from "../actions/city.actions";
import { CityService } from "../services/CityService/cityApi.service";

@Injectable()
export class CityEffects{
  constructor(private effectAction : Actions, private cityService : CityService, private store : Store){}
  getAllCityEffect : Observable<Action> = createEffect(
    () => this.effectAction.pipe(
      ofType(CityActionType.GET_ALL_CITIES),
      mergeMap(() => {
        return this.cityService.getCities().pipe(
          map((cities) => new GetAllCitiesSuccesACTION(cities)),
          catchError((error) =>of( new GetAllCitiesErrorACTION(error)))
        )
      })
    )
  )
  saveCityEffect : Observable<Action> = createEffect(
    () => this.effectAction.pipe(
      ofType(CityActionType.SAVE_CITY),
      mergeMap((action : SaveCityACTION) => {
        return this.cityService.saveCity(action.payload). pipe(
          map((response) => new SaveCitySuccesACTION(response)),
          catchError((error) =>of( new SaveCityErrorACTION(error)))
        )
      })
    )
  )
}
