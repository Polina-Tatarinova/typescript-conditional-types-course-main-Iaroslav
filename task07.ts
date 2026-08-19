import { Expect, Equal } from './helpers';

// Задача: Удалить все свойства объекта, значения которых являются функциями.
// Описание: Фильтрует объект T, исключая из него все свойства, типы значений которых наследуются от Function.

type ExcludeFunctionProps<T> = any;

// Проверки (не менять):
type Input = { name: string; greet: () => void; age: number };
type Result = Expect<Equal<ExcludeFunctionProps<Input>, { name: string; age: number }>>;
