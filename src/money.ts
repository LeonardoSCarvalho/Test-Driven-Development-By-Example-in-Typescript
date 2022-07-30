export class Money {
  public amount: number

  toEquals (other: Money): boolean {
    if (this.constructor !== other.constructor) return false
    return this.amount === other.amount
  }
}
