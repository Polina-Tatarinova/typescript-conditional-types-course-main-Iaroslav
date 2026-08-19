import { Expect, Equal } from './helpers';

// Задача: Добавить null ко всем свойствам объекта.
// Описание: Принимает тип объекта T и возвращает новый тип, где тип каждого свойства K расширен возможностью принимать значение null (т.е. T[K] | null).

type MakeNullable<T> = {
    [K in keyof T]: T[K] | null 
}

// Проверки (не менять):
type Result = Expect<Equal<MakeNullable<{ name: string; age: number }>, { name: string | null; age: number | null }>>;
