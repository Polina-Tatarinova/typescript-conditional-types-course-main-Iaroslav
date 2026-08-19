import { Expect, Equal } from './helpers';

// Задача: Глубокий readonly (DeepReadonly).
// Описание: Рекурсивно обходит объект T на всю глубину и делает все его свойства (и свойства всех вложенных объектов) доступными только для чтения (readonly).

type DeepReadonly<T> = any;

// Проверки (не менять):
type Input = { a: { b: { c: number } } };
type Result = Expect<Equal<DeepReadonly<Input>, { readonly a: { readonly b: { readonly c: number } } }>>;
