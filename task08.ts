import { Expect, Equal } from './helpers';

// Задача: Оставить в объекте свойства определённого типа.
// Описание: Принимает объект T и целевой тип U. Возвращает новый тип, содержащий только те свойства T, значения которых имеют тип U (или наследуются от него).

type PickByValueType<T, U> = any;

// Проверки (не менять):
type Input = { id: number; name: string; age: number };
type Result = Expect<Equal<PickByValueType<Input, number>, { id: number; age: number }>>;
