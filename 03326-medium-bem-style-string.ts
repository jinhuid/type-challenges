// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<BEM<"btn", ["price"], []>, "btn__price">>,
  Expect<
    Equal<
      BEM<"btn", ["price"], ["warning", "success"]>,
      "btn__price--warning" | "btn__price--success"
    >
  >,
  Expect<
    Equal<
      BEM<"btn", [], ["small", "medium", "large"]>,
      "btn--small" | "btn--medium" | "btn--large"
    >
  >
]

// ============= Your Code Here =============

type Splicing<S extends string, T extends any[]> = T["length"] extends 0
  ? ""
  : `${S}${T[number]}`
type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${Splicing<"__", E>}${Splicing<"--", M>}`
