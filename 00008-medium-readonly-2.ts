// ============= Test Cases =============
import type { Alike, Expect } from "./test-utils"

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, "description">, Expected>>
]

// @ts-expect-error
type error = MyReadonly2<Todo1, "title" | "invalid">

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}

// ============= Your Code Here =============
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & {
  // 重映射
  // [P in Exclude<keyof T, K>]: T[P] //剔除得到的属性会丢失readonly的特性
  [P in keyof T as Exclude<P, K>]: T[P] //这个是纯过滤的写法 会保留如readonly的特性
}

type a = MyReadonly2<Todo2, "description">
