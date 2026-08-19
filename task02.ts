import { Expect, Equal } from './helpers';

// Задача: Проверить, является ли тип объектом.
// Описание: Возвращает true, если переданный тип T является объектом, и false в противном случае.
// Внимание: Массивы и примитивы (string, number и т.д.) объектами не считаются.

type IsObject<T> = any;

// Проверки (не менять):
type Test3 = Expect<Equal<IsObject<{ a: number }>, true>>;
type Test4 = Expect<Equal<IsObject<string[]>, false>>;
type Test5 = Expect<Equal<IsObject<string>, false>>;
