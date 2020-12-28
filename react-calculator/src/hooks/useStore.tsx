import * as React from 'react'
import { StoreContext } from 'src/contexts/StoreContext'

export const useStore = () => {
  const props = React.useContext(StoreContext)
  return { ...props }
}
