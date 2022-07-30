export class Money {
  public amount: number

  toEquals (other: Money): boolean {
    return this.amount === other.amount
  }
}
