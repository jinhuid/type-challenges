export {}

// 默认${any} 可以匹配任意 字符串包括"",当我们有时想判断一个字符串长度是否大于等于1时就可以用下面的方式
type c = "2" extends `${any}${any}` ? 1 : 2


// 如果准确知道左侧字符内部类型的话，可以使用指定的类型来限制，这里我们限制为number
type d = "" extends `${number}` ? 1 : 2
