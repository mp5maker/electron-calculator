import * as React from 'react'
import { Body } from 'src/components/body'
import { Calculator } from 'src/components/calculator'

interface HomePropsInterface {}

export const Home: React.FC<HomePropsInterface> = () => {
  return (
    <Body>
      <Calculator />
    </Body>
  )
}
