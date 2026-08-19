import { Expect, Equal } from './helpers';

// Задача: Доступ к свойствам по индексу (Indexed Access Types)
// Описание: Вы можете получить тип конкретного свойства объекта с помощью синтаксиса T[K], где T — объект, а K — ключ.
// Пример: type User = { id: number; name: string };
// type UserName = User['name']; // string
// Задание: Создайте тип GetAgeType<T>, который принимает объект T (гарантированно имеющий свойство age) и возвращает тип этого свойства.

type GetAgeType<T extends { age: any }> = any;

// Проверки (не менять):
type Test = Expect<Equal<GetAgeType<{ name: string; age: number }>, number>>;
