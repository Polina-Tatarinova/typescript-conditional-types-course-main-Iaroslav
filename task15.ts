import { Expect, Equal } from './helpers';

// Задача: Добавить префикс к ключам объекта (без рекурсии).
// Описание: Принимает объект T и строку-префикс Prefix. Возвращает объект, ключи которого переименованы в формате "Prefix.Key", а типы значений остались без изменений.

type KeysWithPrefix<T, Prefix extends string> = any;

// Проверки (не менять):
type Input = { a: number; b: string };
type Result = Expect<Equal<KeysWithPrefix<Input, 'user'>, { 'user.a': number; 'user.b': string }>>;
