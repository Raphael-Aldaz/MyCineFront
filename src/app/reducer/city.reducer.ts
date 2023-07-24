import { Action } from "@ngrx/store"
import { CityState, CityStateEnumm, cityState } from "../state/city.state"
import { CityActionType, CityAction } from "../actions/city.actions"
export function CityReducer(state : CityState = cityState, action: Action):CityState {
  switch(action.type){
    case CityActionType.GET_ALL_CITIES :
    return{
      ...state,
      dataState: CityStateEnumm.LOADING
    }
    case CityActionType.GET_ALL_CITIES_SUCCESS:
      return{
        ...state,
        dataState: CityStateEnumm.LOADED,
        city:(<CityAction>action).payload
      }
      case CityActionType.GET_ALL_CITIES_ERROR:
        return{
          ...state,
          dataState: CityStateEnumm.ERROR,
          message:(<CityAction>action).payload
        }
      case CityActionType.SAVE_CITY:
        return{
          ...state,
          dataState: CityStateEnumm.LOADING,

        }
      case CityActionType.SAVE_CITY_SUCCESS:
        return{
          ...state,
          dataState: CityStateEnumm.LOADED,
          message:(<CityAction>action).payload
        }
      case CityActionType.SAVE_CITY_ERROR:
        return{
          ...state,
          message: (<CityAction>action).payload
        }
      default :
      return{
        ...state
      }
    }
  }

