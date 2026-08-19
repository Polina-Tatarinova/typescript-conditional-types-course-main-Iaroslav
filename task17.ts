import { Expect, Equal } from './helpers';

// Задача: Добавить префикс ко всем ключам (включая вложенные объекты).
// Описание: Рекурсивно добавляет указанный префикс ко всем свойствам объекта T на всех уровнях вложенности. Иерархия ключей преобразуется в плоские строки с точкой в качестве разделителя.

type PrefixAllKeys<T, Prefix extends string> = any;

// Проверки (не менять):
type Input = { a: number; b: { c: string } };
type Result = Expect<Equal<PrefixAllKeys<Input, 'root'>, { 'root.a': number } | { 'root.b.c': string }>>;
