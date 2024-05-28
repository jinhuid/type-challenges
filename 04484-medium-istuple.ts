// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>
]

// ============= Your Code Here =============

type IsNever<T> = [T] extends [never] ? true : false
type IsTuple<T> = IsNever<T> extends true
  ? false
  : T extends readonly any[]
  ? number extends T["length"]
    ? false
    : true
  : false

// 这是元组的定义，元组是一个固定长度的数组，元组的长度是元组类型的一个属性，所以我们可以通过获取元组的 length 属性来判断一个类型是否是元组。
type Dome = [1, 2, 3] //tuple
type a = Dome["length"] //3

type Dome2 = any[] //no tuple
type b = Dome2["length"] //number
type c = IsTuple<never>
