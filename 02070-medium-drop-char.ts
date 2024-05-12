// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  // @ts-expect-error
  Expect<Equal<DropChar<"butter fly!", "">, "butterfly!">>,
  Expect<Equal<DropChar<"butter fly!", " ">, "butterfly!">>,
  Expect<Equal<DropChar<"butter fly!", "!">, "butter fly">>,
  Expect<Equal<DropChar<"    butter fly!        ", " ">, "butterfly!">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", " ">, "butterfly!">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", "b">, "  u t t e r f l y ! ">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", "t">, " b u   e r f l y ! ">>
]

// ============= Your Code Here =============

//直接拼接一组字符串 让ts自己找到From的位置 从而推断 L R 最后拼接
type DropChar<S, C extends string> = S extends `${infer L}${C}${infer R}`
  ? `${L}${DropChar<R, C>}`
  : S

type a = DropChar<"butter fly!", "">
