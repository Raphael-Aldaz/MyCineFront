import { Action } from "@ngrx/store"
import { CityState, CityStateEnumm, cityState } from "../state/city.state"
import { CityActionType, CityAction } from "../actions/city.actions"

export function CityReducer(state: CityState = cityState, action: Action): CityState {
  switch (action.type) {
    case CityActionType.GET_ALL_CITIES:
      return {
        ...state,
        dataState: CityStateEnumm.LOADING
      };
    case CityActionType.GET_ALL_CITIES_SUCCESS:
      return {
        ...state,
        dataState: CityStateEnumm.LOADED,
        city: (<CityAction>action).payload
      };
    case CityActionType.GET_ALL_CITIES_ERROR:
      return {
        ...state,
        dataState: CityStateEnumm.ERROR,
        city: (<CityAction>action).payload
      };
    default:
      return {
        ...state
      };
  }
}

