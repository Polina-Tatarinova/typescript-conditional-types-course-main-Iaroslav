import { Expect, Equal } from './helpers';

// Задача: Фильтрация ключей с помощью "as" и "never" (Key Remapping)
// Описание: В Mapped Types можно фильтровать или переименовывать ключи с помощью ключевого слова "as".
// Если в процессе сопоставления ключ приводится к типу "never", он полностью удаляется из результирующего объекта.
// Пример (оставить только свойства, тип которых string):
// type OnlyStringProps<T> = { [K in keyof T as T[K] extends string ? K : never]: T[K] };
// Задание: Создайте тип OnlyBooleanProps<T>, который оставляет в объекте T только те свойства, значения которых имеют тип boolean.

type OnlyBooleanProps<T> = {[K in keyof T as T[K] extends boolean ? K : never]: T[K]};

// Проверки (не менять):
type Test = Expect<Equal<OnlyBooleanProps<{ active: boolean; name: string }>, { active: boolean }>>;
