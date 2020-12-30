export const NUMBERS_ALL = '0123456789.'
export const ONLY_NUMBERS = '012345789'
export const OPERATORS = '/*%+-'

export const add = ({ first, second }: { first: number; second: number }) => first + second
export const subtract = ({ first, second }: { first: number; second: number }) => first - second
export const multiply = ({ first, second }: { first: number; second: number }) => first * second
export const divide = ({ first, second }: { first: number; second: number }) => first / second
export const modulo = ({ first, second }: { first: number; second: number }) => first % second
export const isOperator = (value: string) => OPERATORS.split('').includes(value)
export const isOnlyNumbers = (value: string) => ONLY_NUMBERS.split('').includes(value)
export const isNumbers = (value: string) => NUMBERS_ALL.split('').includes(value)

export const numberHelper = {
  all: () => NUMBERS_ALL.split(''),
  onlyNumbers: () => ONLY_NUMBERS.split(''),
  operators: () => OPERATORS.split(''),
  isNumbers,
  isOperator,
  isOnlyNumbers,
  add,
  subtract,
  multiply,
  divide,
  modulo,
  performCalculation: (list: Array<string>) => {
    console.log(list)
    if (Array.isArray(list) && list.length > 0) {
      const { result, value, operator }: any = list.reduce(
        (all: any, item: string) => {
          if (all.operator && all.value) {
            let calculate = 0
            if (all.operator === '+') {
              calculate = add({ first: all.value, second: parseFloat(item) })
            }
            if (all.operator === '-') {
              calculate = subtract({ first: all.value, second: parseFloat(item) })
            }
            if (all.operator === '*') {
              calculate = multiply({ first: all.value, second: parseFloat(item) })
            }
            if (all.operator === '/') {
              calculate = divide({ first: all.value, second: parseFloat(item) })
            }
            if (all.operator === '%') {
              calculate = modulo({ first: all.value, second: parseFloat(item) })
            }
            console.log('🚀 ~ file: numberHelper.tsx ~ line 30 ~ item', item)
            console.log('🚀 ~ file: numberHelper.tsx ~ line 42 ~ calculate', calculate)
            console.log('🚀 ~ file: numberHelper.tsx ~ line 43 ~ all.value', all.value)
            console.log('🚀 ~ file: numberHelper.tsx ~ line 44 ~ all.operator', all.operator)

            return {
              operator: '',
              value: 0,
              result: all.result + calculate
            }
          }

          if (isOperator(item)) {
            return {
              ...all,
              operator: item
            }
          }

          return {
            ...all,
            value: parseFloat(item)
          }
        },
        {
          operator: '',
          value: 0,
          result: 0
        }
      )

      if (value) {
        if (operator === '+') {
          return add({ first: result, second: parseFloat(value) })
        }
        if (operator === '-') {
          return subtract({ first: result, second: parseFloat(value) })
        }
        if (operator === '*') {
          return multiply({ first: result, second: parseFloat(value) })
        }
        if (operator === '/') {
          return divide({ first: result, second: parseFloat(value) })
        }
        if (operator === '%') {
          return modulo({ first: result, second: parseFloat(value) })
        }
      }

      return result
    }
    return false
  }
}
