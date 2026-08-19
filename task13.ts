import { Expect, Equal } from './helpers';

// Задача: Глубокая опциональность (DeepPartial).
// Описание: Рекурсивно обходит объект T на всю глубину и делает абсолютно все свойства (включая все вложенные объекты) необязательными (опциональными).

type DeepPartial<T> = any;

// Проверки (не менять):
type Input = { user: { name: string; age: number } };
type Result = Expect<Equal<DeepPartial<Input>, { user?: { name?: string; age?: number } }>>;
