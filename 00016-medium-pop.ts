// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>,
  Expect<Equal<Pop<[]>, []>>
]

// ============= Your Code Here =============
// 也可以在 Pop 中使用 infer R 来获取除了最后一个元素之外的所有元素，然后返回 R 即可。
type Pop<T extends any[]> = T extends [...infer R, any] ? R : []

type a = Pop<[]>
