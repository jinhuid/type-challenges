// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
]

// ============= Your Code Here =============

type ToUnion<T> = T extends any[] ? T[number] : T
type Without<
  T extends unknown[],
  U extends unknown | unknown[],
  R extends any[] = []
> = T extends [infer F, ...infer Rest]
  ? F extends ToUnion<U>
    ? Without<Rest, U, R>
    : Without<Rest, U, [...R, F]>
  : R

type a = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>
type b = Without<[1, 2, 4, 1, 5], [1, 2]>

type c = ToUnion<[1, 2]>
