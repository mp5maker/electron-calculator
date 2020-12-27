import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from 'src/components/box'
import { Text } from 'src/components/text'
import { useTheme } from 'src/hooks/useTheme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMinus,
  faTimes,
  faPlus,
  faBackspace,
  faEquals,
  faDivide
} from '@fortawesome/free-solid-svg-icons'
import { Display, CalculatorKey } from 'src/components/design/default'

interface CalculatorPropsInterface {
  width?: number
  height?: number
}

export const Calculator: React.FC<CalculatorPropsInterface> = ({
  width = 200,
  height = 400
}): JSX.Element => {
  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <Box
      style={{
        width,
        height,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.boxShadow.small,
        padding: theme.spacing.small,
        display: 'block'
      }}
    >
      <Display />
      <Box helper={'spaceBetween'}>
        <CalculatorKey
          value={'c'}
          onClick={props => console.log(props)}
          variant={'shadow'}
          last={false}
        >
          {t('C')}
        </CalculatorKey>
        <CalculatorKey
          value={'pi'}
          onClick={props => console.log(props)}
          variant={'shadow'}
          last={false}
        >
          {t('PI')}
        </CalculatorKey>
        <CalculatorKey
          value={'%'}
          onClick={props => console.log(props)}
          variant={'shadow'}
          last={false}
        >
          {t('%')}
        </CalculatorKey>
        <CalculatorKey
          value={'/'}
          onClick={props => console.log(props)}
          variant={'info'}
          last={true}
        >
          <Text>
            <FontAwesomeIcon icon={faDivide} />
          </Text>
        </CalculatorKey>
      </Box>
      <Box helper={'spaceBetween'}>
        <CalculatorKey
          value={'7'}
          onClick={props => console.log(props)}
          variant={'default'}
          last={false}
        >
          {t('7')}
        </CalculatorKey>
        <CalculatorKey
          value={'8'}
          onClick={props => console.log(props)}
          variant={'default'}
          last={false}
        >
          {t('8')}
        </CalculatorKey>
        <CalculatorKey
          value={'9'}
          onClick={props => console.log(props)}
          variant={'default'}
          last={false}
        >
          {t('9')}
        </CalculatorKey>
        <CalculatorKey
          value={'*'}
          onClick={props => console.log(props)}
          variant={'info'}
          last={true}
        >
          <Text>
            <FontAwesomeIcon icon={faTimes} />
          </Text>
        </CalculatorKey>
      </Box>
      <Box helper={'spaceBetween'}>
        <CalculatorKey
          value={'4'}
          onClick={props => console.log(props)}
          variant={'default'}
          last={false}
        >
          {t('4')}
        </CalculatorKey>
        <CalculatorKey
          value={'5'}
          onClick={props => console.log(props)}
          variant={'default'}
          last={false}
        >
          {t('5')}
        </CalculatorKey>
        <CalculatorKey
          value={'6'}
          onClick={props => console.log(props)}
          variant={'default'}
          last={false}
        >
          {t('6')}
        </CalculatorKey>
        <CalculatorKey
          value={'-'}
          onClick={props => console.log(props)}
          variant={'info'}
          last={true}
        >
          <Text>
            <FontAwesomeIcon icon={faMinus} />
          </Text>
        </CalculatorKey>
      </Box>
      <Box helper={'spaceBetween'}>
        <CalculatorKey
          value={'1'}
          onClick={props => console.log(props)}
          variant={'default'}
          last={false}
        >
          {t('1')}
        </CalculatorKey>
        <CalculatorKey
          value={'2'}
          onClick={props => console.log(props)}
          variant={'default'}
          last={false}
        >
          {t('2')}
        </CalculatorKey>
        <CalculatorKey
          value={'3'}
          onClick={props => console.log(props)}
          variant={'default'}
          last={false}
        >
          {t('3')}
        </CalculatorKey>
        <CalculatorKey
          value={'+'}
          onClick={props => console.log(props)}
          variant={'info'}
          last={true}
        >
          <Text>
            <FontAwesomeIcon icon={faPlus} />
          </Text>
        </CalculatorKey>
      </Box>
      <Box helper={'spaceBetween'}>
        <CalculatorKey
          value={'0'}
          onClick={props => console.log(props)}
          variant={'default'}
          last={false}
        >
          {t('0')}
        </CalculatorKey>
        <CalculatorKey
          value={'.'}
          onClick={props => console.log(props)}
          variant={'default'}
          last={false}
        >
          {t('__DOT__')}
        </CalculatorKey>
        <CalculatorKey
          value={'back'}
          onClick={props => console.log(props)}
          variant={'default'}
          last={false}
        >
          <Text>
            <FontAwesomeIcon icon={faBackspace} />
          </Text>
        </CalculatorKey>
        <CalculatorKey
          value={'back'}
          onClick={props => console.log(props)}
          variant={'default'}
          last={true}
        >
          <Text>
            <FontAwesomeIcon icon={faEquals} />
          </Text>
        </CalculatorKey>
      </Box>
    </Box>
  )
}
