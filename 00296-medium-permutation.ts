// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<Permutation<"A">, ["A"]>>,
  Expect<
    Equal<
      Permutation<"A" | "B" | "C">,
      | ["A", "B", "C"]
      | ["A", "C", "B"]
      | ["B", "A", "C"]
      | ["B", "C", "A"]
      | ["C", "A", "B"]
      | ["C", "B", "A"]
    >
  >,
  Expect<
    Equal<
      Permutation<"B" | "A" | "C">,
      | ["A", "B", "C"]
      | ["A", "C", "B"]
      | ["B", "A", "C"]
      | ["B", "C", "A"]
      | ["C", "A", "B"]
      | ["C", "B", "A"]
    >
  >,
  Expect<Equal<Permutation<boolean>, [false, true] | [true, false]>>,
  Expect<Equal<Permutation<never>, []>>
]

// ============= Your Code Here =============
type Permutation<T, K = T> = [T] extends [never]
  ? []
  : K extends K //重映射自身
  ? // 巧妙利用 Exclude 当 Exclude T K都为1位时,返回的是 never ,再传递给 Permutation 时,就会返回 []
    [K, ...Permutation<Exclude<T, K>>] //K为联合类型时,会递归调用，组合的结果为这个数组的联合类型,由于Exclude<T, K>得到的也是联合类型 传递给Permutation时,会递归调用,又会得到一个联合数组，最终就是一个笛卡尔积数组
  : never

type a = Permutation<"A" | "B" | "C">
