// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<
    Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>
  >
]

// ============= Your Code Here =============
type GetRequired<T> = {
  [P in keyof T as T[P] /**如果P属性是可选类型 那么T[P]的类型为T[P]|undefined 判断不成立 */ extends Required<T>[P]
    ? P
    : never]: T[P]
}


type a = GetRequired<{ foo: number; bar?: string }>
type c = "a" | undefined extends "a" ? true : false
