// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, "a"], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, "a", any], any>, 4>>,
  Expect<Equal<IndexOf<[string, "a"], "a">, 1>>,
  Expect<Equal<IndexOf<[any, 1], 1>, 1>>
]

// ============= Your Code Here =============
type myEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false
type IndexOf<T extends any[], U extends any, R extends any[] = []> = T extends [
  infer F,
  ...infer Rest
]
  ? myEqual<F, U> extends true
    ? R["length"]
    : IndexOf<Rest, U, [...R, 0]>
  : -1

type a = IndexOf<[string, 1, number, "a"], number>
type aa = IndexOf<[string, 1, number, "a", any], any>

// 这道题的关键还是在于 什么是相等？[T] extends [U] && [U] extends [T] 两个条件都满足其实也会出现纰漏
// 像any就是这种情况
type b = [1] extends [number] ? true : false
