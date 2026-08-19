import { Expect, Equal } from './helpers';

// Задача: Получить тип элементов массива.
// Описание: Принимает тип T (который должен быть массивом) и возвращает тип элементов, хранящихся в этом массиве.
// Если передан не массив, возвращает never.

type TypeOfArray<T> = T extends any[] ? T[number] : never;


// Проверки (не менять):
type Test1 = Expect<Equal<TypeOfArray<string[]>, string>>;
type Test2 = Expect<Equal<TypeOfArray<number[]>, number>>;
