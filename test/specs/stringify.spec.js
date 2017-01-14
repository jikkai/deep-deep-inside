const expect = require('chai').expect
const DDI = require('../../lib/index')

describe('#stringify()', () => {
  describe('number', () => {
    it('return {"a":1}', () => {
      expect(DDI.stringify({a: 1})).to.be.equal('{"a":1}')
    })
  })
  describe('string', () => {
    it('return {"a":"1"}', () => {
      expect(DDI.stringify({a: "1"})).to.be.equal('{"a":"1"}')
    })
  })
})
