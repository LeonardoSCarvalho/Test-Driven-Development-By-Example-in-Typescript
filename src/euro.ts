import { Money } from './money'

export class Euro extends Money {
  constructor (amount: number) {
    super()
    super.amount = amount
  }

  times (multiplier: number): Euro {
    return new Euro(this.amount * multiplier)
  }
}
