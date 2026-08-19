import { Expect, Equal } from './helpers';

// Задача: Добавить префикс ко всем ключам объекта.
// Описание: Принимает объект T и строку P. Возвращает новый объект, в котором ко всем ключам T спереди добавлен префикс P.

type AddPrefix<T, P extends string> = any;

// Проверки (не менять):
type Input = { name: string; age: number };
type Result = Expect<Equal<AddPrefix<Input, 'user_'>, { user_name: string; user_age: number }>>;
