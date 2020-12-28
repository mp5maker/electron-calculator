import * as React from 'react'
import { StoreReducer } from 'src/reducers/StoreReducer'
import { defaultState } from 'src/reducers/StoreReducer/defaultState'
import { StoreReducerPropsInterface } from 'src/reducers/StoreReducer/interface'

interface StoreContextPropsInterface {
  state?: StoreReducerPropsInterface
  dispatch?: ((params: any) => any) | ((params: any) => void)
}
export const StoreContext = React.createContext<Partial<StoreContextPropsInterface>>({})

interface StoreContextProviderPropsInterface {}
export const StoreContextProvider: React.FC<StoreContextProviderPropsInterface> = ({
  children
}): JSX.Element => {
  const [state, dispatch]: any = React.useReducer<any>(StoreReducer, defaultState)

  return (
    <StoreContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
