// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<ParseUrlParams<"">, never>>,
  Expect<Equal<ParseUrlParams<":id">, "id">>,
  Expect<Equal<ParseUrlParams<"posts/:id">, "id">>,
  Expect<Equal<ParseUrlParams<"posts/:id/">, "id">>,
  Expect<Equal<ParseUrlParams<"posts/:id/:user">, "id" | "user">>,
  Expect<Equal<ParseUrlParams<"posts/:id/:user/like">, "id" | "user">>
]

// ============= Your Code Here =============
type ParseUrlParams<
  T extends string,
  P extends string = never
> = T extends `${infer _}:${infer S}`
  ? S extends `${infer R}/${infer Rest}`
    ? ParseUrlParams<Rest, P | R>
    : P | S
  : P

type a = ParseUrlParams<"posts/:id/">
