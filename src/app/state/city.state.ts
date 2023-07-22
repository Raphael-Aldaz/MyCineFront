import { City } from "../models/city.models";

export enum CityStateEnumm{
  LOADING = "loading",
  LOADED = "loaded",
  ERROR = "error",
  INITIAL = "initial"
}

export interface CityState{
  city: City[],
  errorMessage: string,
  dataState: CityStateEnumm,
}
export const cityState : CityState = {
  city : [],
  errorMessage:"error",
  dataState : CityStateEnumm.INITIAL
}
