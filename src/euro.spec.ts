import { Euro } from './euro'

describe('Euro', () => {
  it('Should return 10 when five euros are multiplied by two and 15 when multiplied by three', () => {
    const five: Euro = new Euro(5)
    expect(five.times(2).toEquals(new Euro(10))).toBeTruthy()
    expect(five.times(3).toEquals(new Euro(15))).toBeTruthy()
  })
})
