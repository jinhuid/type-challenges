// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ["1", "2"]>, [[1, "1"], [2, "2"]]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>
]

// ============= Your Code Here =============

type UnionToIntersection<U> = (
  U extends unknown ? (arg: U) => 0 : never
) extends (arg: infer I) => 0
  ? I
  : never

// LastInUnion<A | B> = B
type LastInUnion<U> = UnionToIntersection<
  U extends unknown ? (x: U) => 0 : never
> extends (x: infer L) => 0
  ? L
  : never

// UnionToTuple<A, B> = [A, B]
// 联合类型转元组
type UnionToTuple<T, Last = LastInUnion<T>> = [T] extends [never]
  ? []
  : [...UnionToTuple<Exclude<T, Last>>, Last]

type Union = 1 | 2 | 3
type Result = UnionToTuple<Union> // Result is [1, 2, 3]

type Zip<T extends any[], U extends any[]> = UnionToTuple<
  {
    [K in keyof T]: [T[K], K extends keyof U ? U[K] : never]
  }[number] &
    {
      [K in keyof U]: [K extends keyof T ? T[K] : never, U[K]]
    }[number]
>
type a = Zip<[1, 2, 3], ["1", "2"]>

type aa = keyof [1, 2, 3] & keyof ["1", "2"]

// type b = UnionToTuple<1 | 2 | 3>

// type Zip<
//   A extends any[],
//   B extends any[],
//   L extends any[] = []
// > = L["length"] extends A["length"] | B["length"]
//   ? L
  // : Zip<A, B, [...L, [A[L["length"]], B[L["length"]]]]>

// type Zip<T, U, R extends any[] = []> = T extends [infer R1, ...infer R2]
//   ? U extends [infer R3, ...infer R4]
//     ? Zip<R2, R4, [...R, [R1, R3]]>
//     : R
//   : R
