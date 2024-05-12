// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<"a" | "b" | "c" | "d">, true>>,
  Expect<Equal<IsUnion<undefined | null | void | "">, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | "a">, false>>,
  Expect<Equal<IsUnion<never>, false>>
]

// ============= Your Code Here =============
// type UnionToTuple<T, K = T> = [T] extends [never]
//   ? []
//   : K extends K
//   ? [K, ...UnionToTuple<Exclude<T, K>>]
//   : never
// type a = UnionToTuple<string | number> // [string, number]
// type b = UnionToTuple<never> // [string, number]

// type IsUnion<T, B = T> = UnionToTuple<T, B> extends [T] | [] ? false : true

type IsNever<T extends unknown> = [T] extends [never] ? true : false

type IsUnion<T, B = T> = IsNever<T> extends true
  ? false
  : T extends B
  ? [B] extends [T]
    ? false
    : true
  : never

// type isUnion2<T, B = T> = T extends B
//   ? true extends true
//     ? 1
//     : 2
//   : false extends false
//   ? 4
//   : 6

// type c = IsUnion<never>
