export {}

type Test<T> = T extends T ? `-${T & string}` : "-"

type a = Test<"A" | "B" | "C"> // -1

type Test2<T extends string[]> = {
  [K in keyof T]: `-${T[K]}`
}[number]
type b = Test2<["A", "B", "C"]>

type Test3<T extends string[], U = T[number]> = U extends U
  ? `-${U & string}`
  : "-"

type c = Test2<["A", "B", "C"]>
