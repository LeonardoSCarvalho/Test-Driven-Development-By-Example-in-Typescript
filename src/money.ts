export class Money {
  public amount: number
  public _currency: string
  constructor (amount: number, currency: string) {
    this.amount = amount
    this._currency = currency
  }

  static dollar (amount: number):Money {
    return new Dollar(amount, 'USD')
  }

  static euro (amount: number):Money {
    return new Euro(amount, 'EUR')
  }

  toEquals (other: Money): boolean {
    if (this._currency !== other._currency) return false
    return this.amount === other.amount
  }

  currency (): string {
    return this._currency
  }

  times (multiplier: number):Money {
    return new Dollar(this.amount * multiplier, this._currency)
  }
}

export class Dollar extends Money {

}

export class Euro extends Money {

}
