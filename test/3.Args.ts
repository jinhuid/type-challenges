export {}

type Reverse<T extends any[]> = T extends [infer F, ...infer R]
  ? [...Reverse<R>, F]
  : []
type FlipArguments<T extends (...args: any[]) => any> = T extends (
  ...args: infer Rest
) => infer R
  ? (...args: Reverse<Rest>) => R
  : never

type Args<T extends (...args: any[]) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never
type a = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>

type b = Args<(arg0: string, arg1: number, arg2: boolean) => void>

type c = Reverse<b>

function fn(a: number, b: string, c: {}): boolean {
  return true
}

type d = Args<typeof fn>

type e = FlipArguments<typeof fn>


// 使用函数声明方式
const fn2: e = () => {
  return true
}

function fn3(a: {}, b: string, c: number) {
  // return true
  return undefined
}
