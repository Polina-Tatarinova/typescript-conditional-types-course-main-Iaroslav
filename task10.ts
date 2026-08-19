import { Expect, Equal } from './helpers';

// Задача: Сделать свойства объекта и свойства первого уровня вложенных объектов readonly.
// Описание: Делает свойства объекта T только для чтения. Если свойство является объектом, его непосредственные свойства также должны стать readonly (но не глубже - ровно на 1 уровень вложенности).

type DeepReadonlyOneLevel<T> = {
    readonly [K in keyof T ] : T[K] extends object ? {readonly [V in keyof T[K] ] : T[K][V]} : T[K]
}

// Проверки (не менять):
type Input = { user: { name: string; age: number }; active: boolean };
type Result = Expect<Equal<DeepReadonlyOneLevel<Input>, { readonly user: { readonly name: string; readonly age: number }; readonly active: boolean }>>;
