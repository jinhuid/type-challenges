// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<DeepReadonly<X1>, Expected1>>,
  Expect<Equal<DeepReadonly<X2>, Expected2>>
]

type X1 = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: "string"
        }
        k: "hello"
      }
      l: [
        "hi",
        {
          m: ["hey"]
        }
      ]
    }
  }
}

type X2 = { a: string } | { b: number }

type Expected1 = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: "string"
        }
        readonly k: "hello"
      }
      readonly l: readonly [
        "hi",
        {
          readonly m: readonly ["hey"]
        }
      ]
    }
  }
}

type Expected2 = { readonly a: string } | { readonly b: number }

// ============= Your Code Here =============
// T extends object 把联合对象类型拆分成单个映射再合并
type DeepReadonly<T> = T extends object
  ? keyof T extends never
    ? T
    : { readonly [k in keyof T]: DeepReadonly<T[k]> }
  : T

// type a = [
//   "hi",
//   {
//     m: ["hey"]
//   }
// ]
// type r = {
//   readonly [k in keyof a]: a[k]
// }

// // 根据泛型映射类型
// type d<T> = { readonly [k in keyof T]: T[k] }
// type r2 = d<a>
