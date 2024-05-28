// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, "a", 2, "b", 2, "a"]>, [1, "a", 2, "b"]>>,
  Expect<
    Equal<
      Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>,
      [string, number, 1, "a", 2, "b"]
    >
  >,
  Expect<
    Equal<
      Unique<[unknown, unknown, any, any, never, never]>,
      [unknown, any, never]
    >
  >
]

// ============= Your Code Here =============
type IsHas<T extends any[], U> = T extends [infer F, ...infer Rest]
  ? Equal<F, U> extends true
    ? true
    : IsHas<Rest, U>
  : false

type Unique<T extends any[], R extends any[] = []> = T extends [
  infer F,
  ...infer Rest
]
  ? IsHas<R, F> extends true
    ? Unique<Rest, R>
    : Unique<Rest, [...R, F]>
  : R

type a = Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>
