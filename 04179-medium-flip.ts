// ============= Test Cases =============
import type { Equal, Expect, NotEqual } from "./test-utils"

type cases = [
  Expect<Equal<{ a: "pi" }, Flip<{ pi: "a" }>>>,
  Expect<NotEqual<{ b: "pi" }, Flip<{ pi: "a" }>>>,
  Expect<Equal<{ 3.14: "pi"; true: "bool" }, Flip<{ pi: 3.14; bool: true }>>>,
  Expect<
    Equal<{ val2: "prop2"; val: "prop" }, Flip<{ prop: "val"; prop2: "val2" }>>
  >
]

// ============= Your Code Here =============
type Flip<T extends Record<PropertyKey, string | number | boolean>> = {
  // 这里要注意 T[K] 取得value的类型 而不是key，所以要对value的类型进行约束，否则不能做key
  [K in keyof T as `${
    T[K] /**这里的T[K]不能是symbol 因为无法被转换成字符串*/
  }`]: K
}

type a = Flip<{ pi: 3.14; bool: true }>

type b = Flip<{ prop: "val"; prop2: "val2" }>
