import { Dollar } from './dollar'
import { Euro } from './euro'

describe('Money', () => {
  describe('Dollar', () => {
    it('Should return 10 when five dollars are multiplied by two and 15 when multiplied by three', () => {
      const five: Dollar = new Dollar(5)
      expect(five.times(2).toEquals(new Dollar(10))).toBeTruthy()
      expect(five.times(3).toEquals(new Dollar(15))).toBeTruthy()
    })
    it('Should return true when dollars of the same value are compared', () => {
      expect(new Dollar(10).toEquals(new Dollar(10))).toBeTruthy()
      expect(new Dollar(5).toEquals(new Dollar(10))).toBeFalsy()
    })
  })
  describe('Euro', () => {
    it('Should return 10 when five euros are multiplied by two and 15 when multiplied by three', () => {
      const five: Euro = new Euro(5)
      expect(five.times(2).toEquals(new Euro(10))).toBeTruthy()
      expect(five.times(3).toEquals(new Euro(15))).toBeTruthy()
    })
  })
})
