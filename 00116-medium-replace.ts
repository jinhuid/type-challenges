// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<Replace<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<Replace<"foobarbar", "bar", "foo">, "foofoobar">>,
  Expect<Equal<Replace<"foobarbar", "", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"foobarbar", "bar", "">, "foobar">>,
  Expect<Equal<Replace<"foobarbar", "bra", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"", "", "">, "">>
]

// ============= Your Code Here =============
type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  //直接拼接一组字符串 让ts自己找到From的位置 从而推断 L R 最后拼接
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${R}`
  : S
type a = Replace<"foobarbar", "", "foo">