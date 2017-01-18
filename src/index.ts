import stringify from './utils/stringify'
import parse from './utils/parse'

interface DDI {
  stringify: Function
  parse: Function
}

export const DeepDeepInside: DDI = {
  stringify: stringify,
  parse: parse
}
