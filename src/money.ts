import { Expression } from './expression'
import { Sum } from './sum'

export class Money implements Expression {
  private readonly _amount: number
  private readonly _currency: string
  constructor (_amount: number, currency: string) {
    this._amount = _amount
    this._currency = currency
  }

  static dollar (_amount: number):Money {
    return new Money(_amount, 'USD')
  }

  static euro (_amount: number):Money {
    return new Money(_amount, 'EUR')
  }

  toEquals (other: Money): boolean {
    if (this._currency !== other._currency) return false
    return this._amount === other._amount
  }

  currency (): string {
    return this._currency
  }

  times (multiplier: number):Money {
    return new Money(this._amount * multiplier, this._currency)
  }

  plus (addend: Money): Expression {
    return new Sum(this, addend)
  }

  reduce (to: string): Money {
    return this
  }

  amount (): number {
    return this._amount
  }
}
