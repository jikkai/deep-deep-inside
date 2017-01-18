const expect = require('chai').expect
const DDI = require('../../lib/index')

describe('#stringify()', () => {
  describe('string', () => {
    it('return {"a":"1"}', () => {
      expect(DDI.stringify({a: "1"})).to.be.equal('{"a":"1"}')
    })
  })

  describe('number', () => {
    it('return {"a":1}', () => {
      expect(DDI.stringify({a: 1})).to.be.equal('{"a":1}')
    })

    it('return {"a":Infinity}', () => {
      expect(DDI.stringify({a: Infinity})).to.be.equal('{"a":Infinity}')
    })

    it('return {"a":NaN}', () => {
      expect(DDI.stringify({a: NaN})).to.be.equal('{"a":NaN}')
    })
  })

  describe('boolean', () => {
    it('return {"a":true}', () => {
      expect(DDI.stringify({a: true})).to.be.equal('{"a":true}')
    })
  })

  describe('function', () => {
    it('return {"a":function (){console.log(\'a\')}}', () => {
      expect(DDI.stringify({
        a: function (){console.log('a')}
      })).to.be.equal('{"a":function (){console.log(\'a\')}}')
    })
  })
})
