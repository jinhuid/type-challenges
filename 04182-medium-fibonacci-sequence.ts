// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>
]

// ============= Your Code Here =============
// type GenArr<
//   T extends number,
//   Arr extends number[] = []
// > = Arr["length"] extends T ? Arr : GenArr<T, [...Arr, 1]>

// type ShiftOne<T extends number[]> = T extends [infer _, ...infer C] ? C : T
// type ShiftTwo<T extends number[]> = T extends [infer _, infer __, ...infer C]
//   ? C
//   : T

// type _Fibonacci<T extends number> = T extends 1
//   ? [1]
//   : T extends 2
//   ? [1]
//   : [
//     // 与类型“"length"”和“keyof ShiftOne<GenArr<T, []>>”相比，堆栈深度过高。ts(2321)
//       ..._Fibonacci<ShiftOne<GenArr<T>>["length"]>,
//       ..._Fibonacci<ShiftTwo<GenArr<T>>["length"]>
//     ]
// type Fibonacci<T extends number> = _Fibonacci<T>['length']

// type a = _Fibonacci<8> // 1

type Fibonacci<
  T extends number,
  P extends number[] = [],
  N extends number[] = [1],
  A extends any[] = [1]
> = A["length"] extends T
  ? N["length"]
  : Fibonacci<T, [...N], [...P, ...N], [...A, 1]>

type a = Fibonacci<20> // 21
