import {
  WORKING_CHANGE,
  HISTORY_CHANGE,
  RESULT_CHANGE,
  WORKING_CLEAR,
  HISTORY_CLEAR,
  RESULT_CLEAR,
  WORKING_REPLACE,
  HISTORY_REPLACE,
  RESULT_REPLACE
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
    case RESULT_CHANGE:
      return {
        ...state,
        result: [...state.result, ...value]
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
    case RESULT_CLEAR:
      return {
        ...state,
        result: [...state.result, ...(isValueArray ? value : [])]
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
    case RESULT_REPLACE:
      return {
        ...state,
        result: value
      }
    default:
      return state
  }
}
