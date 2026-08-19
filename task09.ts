import { Expect, Equal } from './helpers';

// Задача: Обернуть типы значений каждого свойства объекта в контейнер.
// Описание: Принимает объект T и заменяет тип каждого свойства K на объект вида { value: T[K] }.

type WrapInObject<T> = {
    [K in keyof T ] : { value: T[K] }
};

// Проверки (не менять):
type Input = { name: string; age: number };
type Result = Expect<Equal<WrapInObject<Input>, { name: { value: string }; age: { value: number } }>>;
