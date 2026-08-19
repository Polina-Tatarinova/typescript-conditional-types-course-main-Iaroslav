import { Expect, Equal } from './helpers';

// Задача: Добавить префикс ко всем ключам (включая вложенные объекты).
// Описание: Рекурсивно добавляет указанный префикс ко всем свойствам объекта T на всех уровнях вложенности. Иерархия ключей преобразуется в плоские строки с точкой в качестве разделителя.

type PrefixAllKeys<T, Prefix extends string> = {
[K in keyof T]: T[K] extends object ? PrefixAllKeys<T[K], `${Prefix}.${K & string}`> : { [P in `${Prefix}.${K & string}`]: T[K] }
}[keyof T];

// Проверки (не менять):
type Input = { a: number; b: { c: string } };
type Result = Expect<Equal<PrefixAllKeys<Input, 'root'>, { 'root.a': number } | { 'root.b.c': string }>>;
