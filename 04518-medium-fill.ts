// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 20>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>
]

// ============= Your Code Here =============
// type Fill<
//   T extends unknown[],
//   N,
//   Start extends number = 0,
//   End extends number = T["length"],
//   Front extends any[] = [],
//   Filled extends any[] = [],
//   Back extends any[] = [],
//   R extends any[] = [...Front, ...Filled, ...Back]
// > = Front["length"] extends Start | T["length"]
//   ? R["length"] extends T["length"]
//     ? R
//     : [...Front, ...Filled]["length"] extends End
//     ? Fill<T, N, Start, End, Front, Filled, [...Back, T[R["length"]]]>
//     : Fill<T, N, Start, End, Front, [...Filled, N], Back>
//   : Fill<T, N, Start, End, [...Front, T[Front["length"]]], Filled, Back>

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T["length"],
  Count extends any[] = [],
  Flag extends boolean = Count["length"] extends Start ? true : false
> = Count["length"] extends End
  ? T
  : T extends [infer R, ...infer U] //像end过大时 由于我们在flag判断中传入的是rest，当end过大时，rest会变成空数组，自然就返回T，就不会进行无限递归了
  ? Flag extends false
    ? [R, ...Fill<U, N, Start, End, [...Count, 0]>]
    : [N, ...Fill<U, N, Start, End, [...Count, 0], Flag>]
  : T

type a = Fill<[1, 2, 3], true, 0, 1>
type b = Fill<[1, 2, 3], true, 10, 20>