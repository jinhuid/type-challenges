export {}
type a<T> = T extends never ? true : false
type b = a<never> //在此类泛型操作时不会返回true/false ，因为never是所有类型的子类型，但没有类型是never的超类型

type c = never extends never ? true : false//但是在这里就会返回true/false，never是所有类型的子类型 