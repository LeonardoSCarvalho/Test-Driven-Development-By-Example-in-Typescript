
export class Dollar {
  private readonly amount: number
  constructor (amount: number) {
    this.amount = amount
  }

  times (multiplier: number):Dollar {
    return new Dollar(this.amount * multiplier)
  }

  toEquals (other: Dollar): boolean {
    return this.amount === other.amount
  }
}
