import { Expect, Equal } from './helpers';

// Задача: Развернуть (flatten) один уровень вложенности объекта.
// Описание: Разворачивает вложенные объекты первого уровня в плоскую структуру, где ключи вложенных свойств записываются через точку ("Key.SubKey").

type FlattenOneLevel<T> = any;

// Проверки (не менять):
type Input = { a: number; b: { c: string; d: boolean } };
type Result = Expect<Equal<FlattenOneLevel<Input>, { a: number } | { 'b.c': string; 'b.d': boolean }>>;
