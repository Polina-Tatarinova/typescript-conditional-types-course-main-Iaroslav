import { Expect, Equal } from './helpers';

// Задача: Полная рекурсивная плоская структура (Flatten).
// Описание: Рекурсивно превращает глубоко вложенный объект T в абсолютно плоский объект, где все вложенные пути разделены точками ("parent.child.subchild").
// Ограничение: Если свойство является массивом, его элементы разворачивать не нужно (массив остаётся массивом).

type Flatten<T, Prefix extends string = ''> = any;

// Проверки (не менять):
type Input = { a: number; b: { c: string; d: { e: boolean } } };
type Result = Expect<Equal<Flatten<Input>, { a: number } | { 'b.c': string } | { 'b.d.e': boolean }>>;
