const DeepDeepInside = {}

/**
 * @name stringify
 * @desc JSON Object => String
 * @param obj {object} A JavaScript object
 */
DeepDeepInside.stringify = (obj) => {
  let result = '{'

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]
      if (typeof value === 'number') {
        result += `"${key}":${value}`
      } else if (typeof value === 'string') {
        result += `"${key}":"${value}"`
      }
    }
  }

  result += '}'

  return result
}

/**
 * @name stringify
 * @desc JSON Object => String
 * @param str {string} A string which can be parsed to object 
 */
DeepDeepInside.parse = (str) => {
}

export default DeepDeepInside
