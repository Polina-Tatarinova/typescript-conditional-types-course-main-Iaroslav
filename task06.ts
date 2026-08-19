import { Expect, Equal } from './helpers';

// Задача: Оставить в объекте только свойства со строковыми значениями.
// Описание: Фильтрует объект T, оставляя в нём только те ключи, типы значений которых совместимы с типом string.

type OnlyStringKeys<T> = {
    [K in keyof T as T[K] extends string ? K : never]: T[K]
}

// Проверки (не менять):
type Input = { name: string; age: number; city: string };
type Result = Expect<Equal<OnlyStringKeys<Input>, { name: string; city: string }>>;
