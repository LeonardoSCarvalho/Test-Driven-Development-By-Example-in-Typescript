import { Bank } from './bank'
import { Expression } from './expression'
import { Money } from './money'
import { Sum } from './sum'

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

  it('Should return a sum when plus is used', () => {
    const five = Money.dollar(5)
    const result: Expression = five.plus(five)
    const sum = result as Sum
    expect(sum.augend).toEqual(five)
    expect(sum.addend).toEqual(five)
  })

  it('Should reduce a sum', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4))
    const bank = new Bank()
    const result = bank.reduce(sum, 'USD')
    expect(result).toEqual(Money.dollar(7))
  })

  it('Should reduce from a money', () => {
    const bank = new Bank()
    const result: Money = bank.reduce(Money.dollar(1), 'USD')
    expect(result).toEqual(Money.dollar(1))
  })

  it('Should reduce from different currencies', () => {
    const bank = new Bank()
    bank.addRate('EUR', 'USD', 2)
    const result = bank.reduce(Money.euro(2), 'USD')
    expect(result).toEqual(Money.dollar(1))
  })

  it('Should handle indetity rate', () => {
    expect(new Bank().rate('USD', 'USD')).toEqual(1)
  })
})
