import { City } from "../models/city.models";

export enum CityStateEnumm{
  LOADING = "loading",
  LOADED = "loaded",
  ERROR = "error",
  INITIAL = "initial"
}

export interface CityState{
  city: City[],
  message: string,
  dataState: CityStateEnumm,
}
export const cityState : CityState = {
  city : [],
  message:"",
  dataState : CityStateEnumm.INITIAL
}
