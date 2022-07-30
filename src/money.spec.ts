import { Dollar } from './dollar'
import { Euro } from './euro'

describe('Money', () => {
  describe('Dollar', () => {
    it('Should correctly handle dollar multiplication', () => {
      const five: Dollar = new Dollar(5)
      expect(five.times(2).toEquals(new Dollar(10))).toBeTruthy()
      expect(five.times(3).toEquals(new Dollar(15))).toBeTruthy()
    })
    it('Should correctly handle equality', () => {
      expect(new Dollar(10).toEquals(new Dollar(10))).toBeTruthy()
      expect(new Dollar(5).toEquals(new Dollar(10))).toBeFalsy()
      expect(new Euro(10).toEquals(new Euro(10))).toBeTruthy()
      expect(new Euro(5).toEquals(new Euro(10))).toBeFalsy()
      expect(new Dollar(10).toEquals(new Euro(10))).toBeFalsy()
    })
  })
  describe('Euro', () => {
    it('Should correctly handle euro multiplication', () => {
      const five: Euro = new Euro(5)
      expect(five.times(2).toEquals(new Euro(10))).toBeTruthy()
      expect(five.times(3).toEquals(new Euro(15))).toBeTruthy()
    })
  })
})
