// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

// prettier-ignore
type cases = [
  Expect<Equal<Split<'Hi! How are you?'>, ['Hi! How are you?']>>,
  Expect<Equal<Split<'Hi! How are you?', 'z'>, ['Hi! How are you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ' '>, ['Hi!', 'How', 'are', 'you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ''>, ['H', 'i', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']>>,
  Expect<Equal<Split<'', ''>, []>>,
  Expect<Equal<Split<'The sine in cosine', 'in'>, ['The s', 'e ', ' cos', 'e']>>,
  Expect<Equal<Split<'Never say never, forever and ever.', 'ver'>, ['Ne', ' say ne', ', fore', ' and e', '.']>>,
  Expect<Equal<Split<'', 'z'>, ['']>>,
  Expect<Equal<Split<''>, ['']>>,
  Expect<Equal<Split<string, 'whatever'>, string[]>>,
]

// ============= Your Code Here =============
// your answers
type Split<
  T extends string,
  SEP extends string = never
> = T extends `${infer P}${SEP}${infer L}`
  ? [P, ...Split<L, SEP>]
  : T extends `${infer _}`
  ? T extends SEP
    ? []
    : [T]
  : string[]

type a = Split<"Hi! How are you?", "">
type b = Split<"Hi! How are you?", " ">
type c = Split<"", "z">
type d = Split<"", "">

// type e = "" extends `${infer F}${''}${infer L}` ? L : false
