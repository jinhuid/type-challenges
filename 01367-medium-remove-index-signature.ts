// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type Foo = {
  [key: string]: any
  foo(): void
}

type Bar = {
  [key: number]: any
  bar(): void
  0: string
}

const foobar = Symbol("foobar")
type FooBar = {
  [key: symbol]: any
  [foobar](): void
}

type Baz = {
  bar(): void
  baz: string
}

type cases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void; 0: string }>>,
  Expect<Equal<RemoveIndexSignature<FooBar>, { [foobar](): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, { bar(): void; baz: string }>>
]

// ============= Your Code Here =============
type RemoveIndexSignature<T, P = PropertyKey> = {
  // 如果key是string|number|symbol，就剔除掉，
  // 这里P会进行条件分配

  // string extends K?never:K |
  // number extends K?never:K |
  // symbol extends K?never:K

  // if K is string type,string extends K for result is never ,but number and symbol is not extends K, so get K,so the result is never | K | K  => never | K => K ,so the last result is K
  [K in keyof T as P extends K ? never : K extends P ? K : never]: T[K]
}

// type RemoveIndexSignature<T> = {
//   [K in keyof T as /* filters out all 'string' keys */
//   string extends K
//     ? never
//     : /* filters out all 'number' keys */
//     number extends K
//     ? never
//     : /* filers out all 'symbol' keys */
//     symbol extends K
//     ? never
//     : K /* all that's left are literal type keys */]: T[K]
// }
type p = PropertyKey
