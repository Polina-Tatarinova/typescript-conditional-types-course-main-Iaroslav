import { Expect, Equal } from './helpers';

// Задача: Глубокая выборка свойств (DeepPick).
// Описание: Выбирает указанные ключи K на верхнем уровне объекта T, и если какое-то из выбранных свойств является объектом, рекурсивно выбирает все его свойства.

type DeepPick<T, K extends keyof T> = {
    [P in K] : T[P] extends object ? DeepPick<T[P], keyof T[P]> : T[P]
}

// Проверки (не менять):
type Input = { a: number; b: { c: string; d: number } };
type Result = Expect<Equal<DeepPick<Input, 'b'>, { b: { c: string; d: number } }>>;
