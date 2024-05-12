// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<"">, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>
]

// ============= Your Code Here =============
type IsNever<T extends unknown> = [T] extends [never] ? true : false

// never 类型是所有类型的子类型，但没有类型是 never 的超类型
type a<T> = T & never extends never ? true : false
//没有类型是 never 的父类型所以返回never
// 所以记住 extends是判断是否是子类型 而不是赋值
type R = a<never>
type aa = null & string

type b = [string | never] extends [never] ? true : false
