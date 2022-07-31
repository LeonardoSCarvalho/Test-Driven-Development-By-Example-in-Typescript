import { Bank } from './bank'
import { Expression } from './expression'
import { Money } from './money'

describe('Money', () => {
  it('Should handle dollar multiplication', () => {
    const five: Money = Money.dollar(5)
    expect(five.times(2).toEquals(Money.dollar(10))).toBeTruthy()
    expect(five.times(3).toEquals(Money.dollar(15))).toBeTruthy()
  })

  it('Should handle equality', () => {
    expect(Money.dollar(10).toEquals(Money.dollar(10))).toBeTruthy()
    expect(Money.dollar(5).toEquals(Money.dollar(10))).toBeFalsy()
    expect(Money.euro(10).toEquals(Money.dollar(10))).toBeFalsy()
  })

  it('Should handle currencies', () => {
    expect(Money.dollar(1).currency()).toEqual('USD')
    expect(Money.euro(1).currency()).toEqual('EUR')
  })

  it('Should handle simple addition', () => {
    const five = Money.dollar(5)
    const sum: Expression = five.plus(five)
    const bank = new Bank()
    const reduced:Money = bank.reduce(sum, 'USD')
    expect(reduced.toEquals(Money.dollar(10))).toBeTruthy()
  })
})
