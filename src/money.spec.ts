import { Money } from './money'

describe('Money', () => {
  it('Should correctly handle dollar multiplication', () => {
    const five: Money = Money.dollar(5)
    expect(five.times(2).toEquals(Money.dollar(10))).toBeTruthy()
    expect(five.times(3).toEquals(Money.dollar(15))).toBeTruthy()
  })

  it('Should correctly handle equality', () => {
    expect(Money.dollar(10).toEquals(Money.dollar(10))).toBeTruthy()
    expect(Money.dollar(5).toEquals(Money.dollar(10))).toBeFalsy()
    expect(Money.euro(10).toEquals(Money.euro(10))).toBeTruthy()
    expect(Money.euro(5).toEquals(Money.euro(10))).toBeFalsy()
    expect(Money.euro(10).toEquals(Money.dollar(10))).toBeFalsy()
  })

  it('Should correctly handle euro multiplication', () => {
    const five: Money = Money.euro(5)
    expect(five.times(2).toEquals(Money.euro(10))).toBeTruthy()
    expect(five.times(3).toEquals(Money.euro(15))).toBeTruthy()
  })

  it('Should correctly handle currencies', () => {
    expect(Money.dollar(1).currency()).toEqual('USD')
    expect(Money.euro(1).currency()).toEqual('EUR')
  })
})
