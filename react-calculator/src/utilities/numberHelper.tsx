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
    if (Array.isArray(list) && list.length > 0) {
      const { result }: any = list.reduce(
        (all: any, item: string) => {
          if (all.operator && all.value) {
            let calculate = 0
            if (item === '+') calculate = add({ first: all.value, second: parseFloat(item) })
            if (item === '-') calculate = subtract({ first: all.value, second: parseFloat(item) })
            if (item === '*') calculate = multiply({ first: all.value, second: parseFloat(item) })
            if (item === '/') calculate = divide({ first: all.value, second: parseFloat(item) })
            if (item === '%') calculate = modulo({ first: all.value, second: parseFloat(item) })

            return {
              operator: '',
              value: 0,
              result: all.result + calculate
            }
          }

          if (isOperator(item)) {
            return {
              ...all,
              operator: ''
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
      return result
    }
    return false
  }
}
