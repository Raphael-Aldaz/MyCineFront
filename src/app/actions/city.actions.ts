import { Action } from "@ngrx/store";
import { City } from "../models/city.models";

export enum CityActionType{
  GET_ALL_CITIES = "[City]GET_ALL_CITIES",
  GET_ALL_CITIES_SUCCESS = "[City]GET_ALL_CITIES_SUCCESS",
  GET_ALL_CITIES_ERROR = "[City]GET_ALL_CITIES_ERROR",

  SAVE_CITY = "[City]SAVE_CITY",
  SAVE_CITY_SUCCESS = "[City]SAVE_CITY_SUCCESS",
  SAVE_CITY_ERROR = "[City]SAVE_CITY_ERROR",
}
export class GetAllCitiesACTION implements Action{
  type:CityActionType = CityActionType.GET_ALL_CITIES;
  constructor(public payload : any){}
}
export class GetAllCitiesSuccesACTION implements Action{
  type:CityActionType = CityActionType.GET_ALL_CITIES_SUCCESS;
  constructor(public payload : City[]){}
}
export class GetAllCitiesErrorACTION implements Action{
  type:CityActionType = CityActionType.GET_ALL_CITIES_ERROR;
  constructor(public payload : string){}
}

export class SaveCityACTION implements Action{
  type:CityActionType = CityActionType.SAVE_CITY;
  constructor(public payload : City){}
}
export class SaveCitySuccesACTION implements Action{
  type:CityActionType = CityActionType.SAVE_CITY_SUCCESS;
  constructor(public payload : City){}
}
export class SaveCityErrorACTION implements Action{
  type:CityActionType = CityActionType.SAVE_CITY_ERROR;
  constructor(public payload : string){}
}

export type CityAction = GetAllCitiesACTION | GetAllCitiesSuccesACTION | GetAllCitiesErrorACTION | SaveCityACTION | SaveCitySuccesACTION | SaveCityErrorACTION
