import { Bank } from './bank'
import { Money } from './money'

export interface Expression {
  reduce: (bank: Bank, to: string) => Money
  plus: (addend: Expression) => Expression
}
