// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<
    Equal<
      PickByType<Model, boolean>,
      { isReadonly: boolean; isEnable: boolean }
    >
  >,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>
]

// ============= Your Code Here =============
type PickByType<T, U> = {
  // 简简单单的 T[P] extends U ? P : never ;这里的T[P]是类型，不是值
  [P in keyof T as T[P] extends U ? P : never]: T[P]
}
type a = PickByType<Model, string>
