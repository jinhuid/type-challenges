// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<TupleToNestedObject<["a"], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<["a", "b"], number>, { a: { b: number } }>>,
  Expect<
    Equal<
      TupleToNestedObject<["a", "b", "c"], boolean>,
      { a: { b: { c: boolean } } }
    >
  >,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
]

// ============= Your Code Here =============
type TupleToNestedObject<T extends string[], U> = T extends []
  ? U
  : {
    //这种好像必须使用in才行
      [K in T["0"]]: TupleToNestedObject<
      // infer真好用
        T extends [infer _, ...infer R] ? R : [],
        U
      >
    }
