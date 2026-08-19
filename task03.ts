import { Expect, Equal } from './helpers';

// Задача: Сделать все свойства объекта опциональными.
// Описание: Принимает тип объекта T и возвращает новый тип, в котором все свойства T стали необязательными (добавлен ?).

type MakeOptional<T> = {
    [K in keyof T]? : T[K]
};

// Проверки (не менять):
type Input = { name: string; age: number };
type Result = Expect<Equal<MakeOptional<Input>, { name?: string; age?: number }>>;
