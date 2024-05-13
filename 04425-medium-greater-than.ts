// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>
]

// ============= Your Code Here =============

// type GetNumLen<
//   T extends number | string,
//   A extends number[] = []
// > = `${T}` extends `${infer _}${infer R}`
//   ? GetNumLen<R, [...A, 1]>
//   : A["length"]

// type Compare<N, N2, A extends number[] = []> = N extends A["length"]
//   ? N2 extends A["length"]
//     ? "="
//     : false
//   : N2 extends A["length"]
//   ? true
//   : Compare<N, N2, [...A, 1]>

// type CompareOneByOne<S, S2> = S extends `${infer F extends number}${infer R}`
//   ? S2 extends `${infer F2 extends number}${infer R2}`
//     ? Compare<F, F2> extends infer Result extends boolean
//       ? Result
//       : CompareOneByOne<R, R2>
//     : false
//   : false

// type GreaterThan<T extends number, U extends number> = Compare<
//   GetNumLen<T>,
//   GetNumLen<U>
// > extends infer Result extends boolean
//   ? Result
//   : CompareOneByOne<`${T}`, `${U}`> /**一样的长度 逐位比较 */

// type aa = Compare<1, 1>

type GetSymbol<
  A extends string,
  B extends string,
  F extends any[] = []
> = `${F["length"]}` extends A
  ? `${F["length"]}` extends B
    ? "="
    : "<"
  : `${F["length"]}` extends B
  ? ">"
  : GetSymbol<A, B, [...F, 1]>

type GreaterThan<
  T extends number | string,
  U extends number | string,
  S extends ">" | "<" | "=" = "="
> = `${T}` extends `${infer A}${infer R1}`
  ? `${U}` extends `${infer B}${infer R2}`
    ? GreaterThan<R1, R2, S extends "=" ? GetSymbol<A, B> : S>
    : true
  : `${U}` extends `${number}`
  ? false
  : S extends ">"
  ? true
  : false


