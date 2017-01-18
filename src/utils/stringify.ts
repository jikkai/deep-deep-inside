/**
 * @name stringify
 * @desc JSON Object => String
 * @param obj {object} A JavaScript object
 */

const stringify: Function = (obj: Object) => {
  let result: String = '{'

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]
      if (typeof value === 'string') {
        result += `"${key}":"${value}"`
      } else {
        result += `"${key}":${value}`
      }
    }
  }

  result += '}'

  return result
}

export default stringify
