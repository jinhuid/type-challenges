// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string
}

interface UserPartialNameAndAge {
  name?: string
  age?: number
  address: string
}

type cases = [
  Expect<Equal<PartialByKeys<User, "name">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "age">, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
  // @ts-expect-error
  Expect<Equal<PartialByKeys<User, "name" | "unknown">, UserPartialName>>
]

// ============= Your Code Here =============

type MergeObj<O> = {
  [P in keyof O]: O[P]
}

type PartialByKeys<T, K extends keyof T = keyof T> = MergeObj<
  {
    [P in K]?: T[P]
  } & {
    [P in Exclude<keyof T, K>]: T[P]
  }
>

type a = PartialByKeys<User, "name">

type b = keyof a

