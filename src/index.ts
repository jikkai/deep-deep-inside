interface DDI {
  stringify: Function
  parse: Function
}

const DeepDeepInside: DDI = {
  /**
   * @name stringify
   * @desc JSON Object => String
   * @param obj {object} A JavaScript object
   */
  stringify: (obj: Object) => {
    let result = '{'

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
  },

  /**
   * @name stringify
   * @desc JSON Object => String
   * @param str {string} A string which can be parsed to object 
   */
  parse: (str: String) => {}
}

export default DeepDeepInside
