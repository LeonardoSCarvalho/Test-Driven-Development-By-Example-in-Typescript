export abstract class Money {
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
    if (this.constructor !== other.constructor) return false
    return this.amount === other.amount
  }

  currency (): string {
    return this._currency
  }

  abstract times(multiplier:number): Money
}

export class Dollar extends Money {
  times (multiplier: number):Dollar {
    return Money.dollar(this.amount * multiplier)
  }
}

export class Euro extends Money {
  times (multiplier: number): Euro {
    return Money.euro(this.amount * multiplier)
  }
}
