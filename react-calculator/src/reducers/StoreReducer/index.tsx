import {
  WORKING_CHANGE,
  HISTORY_CHANGE,
  WORKING_CLEAR,
  HISTORY_CLEAR,
  WORKING_REPLACE,
  HISTORY_REPLACE
} from 'src/reducers/StoreReducer/constants'
import { defaultState } from 'src/reducers/StoreReducer/defaultState'
import { StoreReducerPropsInterface } from 'src/reducers/StoreReducer/interface'
import get from 'lodash/get'

export const StoreReducer = (state = defaultState, action: StoreReducerPropsInterface) => {
  const type = get(action, 'type', '')
  const value = get(action, 'value', '')
  const isValueArray = Array.isArray(value) && value.length > 0

  switch (type) {
    case WORKING_CHANGE:
      return {
        ...state,
        working: [...state.working, ...value]
      }
    case HISTORY_CHANGE:
      return {
        ...state,
        history: [...state.history, ...value]
      }
    case WORKING_CLEAR:
      return {
        ...state,
        working: [...(isValueArray ? value : [])]
      }
    case HISTORY_CLEAR:
      return {
        ...state,
        history: [...state.history, ...(isValueArray ? value : [])]
      }
    case WORKING_REPLACE:
      return {
        ...state,
        working: value
      }
    case HISTORY_REPLACE:
      return {
        ...state,
        history: value
      }
    default:
      return state
  }
}
