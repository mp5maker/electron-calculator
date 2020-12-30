import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from 'src/components/box'
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
import { GlobalHotKeys } from 'react-hotkeys'
import { useStore } from 'src/hooks/useStore'
import {
  WORKING_CHANGE,
  HISTORY_CHANGE,
  HISTORY_REPLACE,
  WORKING_CLEAR,
  RESULT_CLEAR,
  WORKING_REPLACE,
  RESULT_CHANGE
} from 'src/reducers/StoreReducer/constants'
import get from 'lodash/get'
import { numberHelper } from 'src/utilities/numberHelper'

interface CalculatorPropsInterface {
  width?: number
  height?: number
}

const keyMap = {
  ZERO: ['0'],
  ONE: ['1'],
  TWO: ['2'],
  THREE: ['3'],
  FOUR: ['4'],
  FIVE: ['5'],
  SIX: ['6'],
  SEVEN: ['7'],
  EIGHT: ['8'],
  NINE: ['9'],
  MULTIPLY: ['shift+8'],
  MODULO: ['shift+5'],
  DIVIDE: ['/'],
  __DOT__: ['.'],
  BACK: ['backspace'],
  SPACE: ['space'],
  PI: ['p+i'],
  MINUS: ['-'],
  ENTER: ['enter'],
  PLUS: ['shift+=']
}

export const Calculator: React.FC<CalculatorPropsInterface> = ({
  width = 200,
  height = 400
}): JSX.Element => {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const { state, dispatch }: any = useStore()
  const working = get(state, 'working', [])
  const result = get(state, 'result', [])
  const history = get(state, 'history', [])
  const hasPreviousData = working[working.length - 1] ? true : false

  const pressed = ({ value }: any) => {
    const isSpacebar = keyMap.SPACE.includes(value)
    const isBackspace = keyMap.BACK.includes(value)
    const isPreviousDataOperator = numberHelper.isOperator(working[working.length - 1])
    const isPreviousDataNumber = numberHelper.isNumbers(working[working.length - 1])
    const isCurrentDataOperator = numberHelper.isOperator(value)
    const isEnter = keyMap.ENTER.includes(value)

    /* Remove the workings */
    if (isSpacebar) {
      dispatch({
        type: WORKING_CLEAR
      })
      dispatch({
        type: RESULT_CLEAR
      })
      return dispatch({
        type: HISTORY_REPLACE,
        value: [...history, ...result]
      })
    }

    /* Clear the previous data */
    if (isBackspace) {
      return dispatch({
        type: WORKING_REPLACE,
        value: working.slice(0, working.length - 1)
      })
    }

    /* Previous data has operator as well as now */
    if (hasPreviousData && isPreviousDataOperator && isCurrentDataOperator) {
      return
    }

    /* Previous data now adding operator */
    if (hasPreviousData && isCurrentDataOperator) {
      const workers = working.reduce(
        (newWorking: any, item: string) => {
          const hasOperator = numberHelper.isOperator(item)

          if (hasOperator) {
            return {
              generate: '',
              result: [...newWorking.result, newWorking.generate, item]
            }
          }

          return {
            generate: (newWorking.generate += String(item)),
            result: newWorking.result
          }
        },
        {
          generate: '',
          result: []
        }
      )

      return dispatch({
        type: WORKING_REPLACE,
        value: [...workers.result, workers.generate, value]
      })
    }

    /* Perform and calculate the data */
    if (isEnter && hasPreviousData && !isPreviousDataOperator) {
      dispatch({
        type: RESULT_CHANGE,
        value: {
          total: numberHelper.performCalculation(working),
          working
        }
      })
      dispatch({
        type: WORKING_CLEAR
      })
      return
    }

    /* Concatenate the numbers only */
    if (hasPreviousData && isPreviousDataNumber) {
      return dispatch({
        type: WORKING_REPLACE,
        value: [
          ...working.slice(0, working.length - 1),
          working.slice(working.length - 1, working.length) + value
        ]
      })
    }

    return dispatch({
      type: WORKING_CHANGE,
      value: [value]
    })
  }

  console.log('🚀 ~ file: index.tsx ~ line 166 ~ history', history)
  console.log('🚀 ~ file: index.tsx ~ line 167 ~ working', working)
  console.log('🚀 ~ file: index.tsx ~ line 168 ~ result', result)

  const handlers: any = {
    ZERO: () => pressed({ value: '0' }),
    ONE: () => pressed({ value: '1' }),
    TWO: () => pressed({ value: '2' }),
    THREE: () => pressed({ value: '3' }),
    FOUR: () => pressed({ value: '4' }),
    FIVE: () => pressed({ value: '5' }),
    SIX: () => pressed({ value: '6' }),
    SEVEN: () => pressed({ value: '7' }),
    EIGHT: () => pressed({ value: '8' }),
    NINE: () => pressed({ value: '9' }),
    MULTIPLY: () => pressed({ value: '*' }),
    MODULO: () => pressed({ value: '%' }),
    DIVIDE: () => pressed({ value: '/' }),
    __DOT__: () => pressed({ value: '.' }),
    BACK: () => pressed({ value: 'backspace' }),
    SPACE: () => pressed({ value: 'space' }),
    PI: () => pressed({ value: 'pi' }),
    MINUS: () => pressed({ value: '-' }),
    ENTER: () => pressed({ value: 'enter' }),
    PLUS: () => pressed({ value: '+' })
  }

  return (
    <GlobalHotKeys keyMap={keyMap} handlers={handlers} allowChanges={true}>
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
        <Display working={working} />
        <Box helper={'spaceBetween'}>
          <CalculatorKey onClick={handlers.SPACE} variant={'shadow'} last={false}>
            {t('C')}
          </CalculatorKey>
          <CalculatorKey onClick={handlers.PI} variant={'shadow'} last={false}>
            {t('PI')}
          </CalculatorKey>
          <CalculatorKey onClick={handlers.MODULO} variant={'shadow'} last={false}>
            {t('%')}
          </CalculatorKey>
          <CalculatorKey onClick={handlers.DIVIDE} variant={'info'} last={true}>
            <FontAwesomeIcon icon={faDivide} />
          </CalculatorKey>
        </Box>
        <Box helper={'spaceBetween'}>
          <CalculatorKey onClick={handlers.SEVEN} variant={'default'} last={false}>
            {t('7')}
          </CalculatorKey>
          <CalculatorKey onClick={handlers.EIGHT} variant={'default'} last={false}>
            {t('8')}
          </CalculatorKey>
          <CalculatorKey onClick={handlers.NINE} variant={'default'} last={false}>
            {t('9')}
          </CalculatorKey>
          <CalculatorKey onClick={handlers.MULTIPLE} variant={'info'} last={true}>
            <FontAwesomeIcon icon={faTimes} />
          </CalculatorKey>
        </Box>
        <Box helper={'spaceBetween'}>
          <CalculatorKey onClick={handlers.FOUR} variant={'default'} last={false}>
            {t('4')}
          </CalculatorKey>
          <CalculatorKey onClick={handlers.FIVE} variant={'default'} last={false}>
            {t('5')}
          </CalculatorKey>
          <CalculatorKey onClick={handlers.SIX} variant={'default'} last={false}>
            {t('6')}
          </CalculatorKey>
          <CalculatorKey onClick={handlers.MINUS} variant={'info'} last={true}>
            <FontAwesomeIcon icon={faMinus} />
          </CalculatorKey>
        </Box>
        <Box helper={'spaceBetween'}>
          <CalculatorKey onClick={handlers.ONE} variant={'default'} last={false}>
            {t('1')}
          </CalculatorKey>
          <CalculatorKey onClick={handlers.TWO} variant={'default'} last={false}>
            {t('2')}
          </CalculatorKey>
          <CalculatorKey onClick={handlers.THREE} variant={'default'} last={false}>
            {t('3')}
          </CalculatorKey>
          <CalculatorKey onClick={handlers.PLUS} variant={'info'} last={true}>
            <FontAwesomeIcon icon={faPlus} />
          </CalculatorKey>
        </Box>
        <Box helper={'spaceBetween'}>
          <CalculatorKey onClick={handlers.ZERO} variant={'default'} last={false}>
            {t('0')}
          </CalculatorKey>
          <CalculatorKey onClick={handlers.DOT} variant={'default'} last={false}>
            {t('__DOT__')}
          </CalculatorKey>
          <CalculatorKey onClick={handlers.BACK} variant={'default'} last={false}>
            <FontAwesomeIcon icon={faBackspace} />
          </CalculatorKey>
          <CalculatorKey onClick={handlers.EQUALS} variant={'success'} last={true}>
            <FontAwesomeIcon icon={faEquals} />
          </CalculatorKey>
        </Box>
      </Box>
    </GlobalHotKeys>
  )
}
