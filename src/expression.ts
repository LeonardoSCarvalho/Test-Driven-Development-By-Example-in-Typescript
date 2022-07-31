import { Money } from './money'

export interface Expression {
  reduce: (to: string) => Money

}
