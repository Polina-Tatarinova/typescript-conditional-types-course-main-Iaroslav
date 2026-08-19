import { Expect, Equal } from './helpers';

// Задача: Сделать все свойства объекта readonly.
// Описание: Принимает тип объекта T и возвращает новый тип, в котором все свойства T стали доступны только для чтения (добавлен модификатор readonly).

type MakeReadonly<T> = any;

// Проверки (не менять):
type Result = Expect<Equal<MakeReadonly<{ name: string }>, { readonly name: string }>>;
