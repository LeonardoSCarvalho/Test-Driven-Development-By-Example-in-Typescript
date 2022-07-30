import { Dollar } from './dollar'

describe('Dollar', () => {
  it('Should return 10 when five dollars are multiplied by two', () => {
    const five: Dollar = new Dollar(5)

    let product: Dollar = five.times(2)
    expect(product.amount).toEqual(10)

    product = five.times(3)
    expect(product.amount).toEqual(15)
  })
  it('Should return true when dollars of the same value are compared', () => {
    expect(new Dollar(10).toEquals(new Dollar(10))).toBeTruthy()
    expect(new Dollar(5).toEquals(new Dollar(10))).toBeFalsy()
  })
})
