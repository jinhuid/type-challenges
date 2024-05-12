// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type Case0 = ["", "", ""]
type Case1 = ["+", "", ""]
type Case2 = ["+", "1", ""]
type Case3 = ["+", "100", ""]
type Case4 = ["+", "100", "%"]
type Case5 = ["", "100", "%"]
type Case6 = ["-", "100", "%"]
type Case7 = ["-", "100", ""]
type Case8 = ["-", "1", ""]
type Case9 = ["", "", "%"]
type Case10 = ["", "1", ""]
type Case11 = ["", "100", ""]

type cases = [
  Expect<Equal<PercentageParser<"">, Case0>>,
  Expect<Equal<PercentageParser<"+">, Case1>>,
  Expect<Equal<PercentageParser<"+1">, Case2>>,
  Expect<Equal<PercentageParser<"+100">, Case3>>,
  Expect<Equal<PercentageParser<"+100%">, Case4>>,
  Expect<Equal<PercentageParser<"100%">, Case5>>,
  Expect<Equal<PercentageParser<"-100%">, Case6>>,
  Expect<Equal<PercentageParser<"-100">, Case7>>,
  Expect<Equal<PercentageParser<"-1">, Case8>>,
  Expect<Equal<PercentageParser<"%">, Case9>>,
  Expect<Equal<PercentageParser<"1">, Case10>>,
  Expect<Equal<PercentageParser<"100">, Case11>>
]

// ============= Your Code Here =============
// type PercentageParser<
//   A extends string,
//   R extends string[] = ["", "", ""]
// > = A extends `${infer F}${infer S}`
//   ? F extends "+" | "-" | ""
//     ? PercentageParser<S, [`${R[0]}${F}`, `${R[1]}`, `${R[2]}`]>
//     : F extends `${number}`
//     ? PercentageParser<S, [`${R[0]}`, `${R[1]}${F}`, `${R[2]}`]>
//     : F extends "%"
//     ? PercentageParser<S, [`${R[0]}`, `${R[1]}`, `${R[2]}${F}`]>
//     : never
//   : R

type CheckPrefix<T> = T extends "+" | "-" ? T : ""
type CheckSuffix<T> = T extends `${infer P}%` ? [P, "%"] : [T, ""]
type PercentageParser<A extends string> = A extends `${CheckPrefix<
  infer L
>}${infer R}`
  ? [L, ...CheckSuffix<R>]
  : ["", ...CheckSuffix<A>]

type a = PercentageParser<"-100%">
