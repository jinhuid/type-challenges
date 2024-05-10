// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>
]

// ============= Your Code Here =============
type LengthOfString<
  S extends string,
  Arr extends string[] = []
  // 当R为空时，返回Arr的长度 即S的长度为0时 extends条件不满足了 ，S长度为1时，F就是S，R为空字符串
> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...Arr, F]>
  : Arr["length"]

type a = LengthOfString<"kumiko">
