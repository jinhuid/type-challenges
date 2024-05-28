// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"
import { ExpectFalse, NotEqual } from "./test-utils"

let x = 1
let y = 1 as const

type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<Integer<1.1>, never>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<0.5>, never>>,
  Expect<Equal<Integer<28.0>, 28>>,
  Expect<Equal<Integer<28.101>, never>>,
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>
]

// ============= Your Code Here =============
// 正整数小数点右侧为0 当模板化后 自动消失。但浮点数不会
type Integer<T extends number> = `${T}` extends `${infer _}.${infer _}`
  ? never
  : number extends T
  ? never
  : T

// type a = 28 extends 28.00 ? true : false
type b = Integer<typeof x>
