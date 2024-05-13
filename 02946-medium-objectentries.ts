// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null]

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ["key", undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ["key", undefined]>>,
  Expect<
    Equal<
      ObjectEntries<{ key: string | undefined }>,
      ["key", string | undefined]
    >
  >
]

// ============= Your Code Here =============
// 这道题有点恶心 如果是可选类型 需要去除undefined，但是只有undefined的类型需要保留
type ObjectEntries<T, U = Required<T>> = {
  [K in keyof U]: [K, U[K] extends never ? undefined : U[K]]
}[keyof U]

type a = ObjectEntries<Model>

type b = ObjectEntries<Partial<Model>>

type c = ObjectEntries<{ key: string | undefined }>

type d = ObjectEntries<{ key?: undefined }>

type test = {} extends Pick<{ key: string | undefined }, "key"> ? true : false

// 只有一个可选属性的时候， {}是可以extends Pick<{ key: string | undefined }, "key">的，它也被认为是一个空对象
type test2 = {} extends Pick<{ key?: undefined }, "key"> ? true : false

type test3 = Pick<{ key?: undefined }, "key">
