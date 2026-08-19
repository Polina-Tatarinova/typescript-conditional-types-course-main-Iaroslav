import { Expect, Equal } from './helpers';

// Задача: Шаблонные литералы типов (Template Literal Types)
// Описание: Позволяют манипулировать строковыми литералами на уровне типов.
// Чтобы преобразовать ключи объекта T в строки при переименовании, их пересекают с типом string: K & string.
// Пример добавления префикса: type Prefix<T> = { [K in keyof T as `get_${K & string}`]: T[K] };
// Задание: Создайте тип PrefixKeysWithIs<T>, который добавляет префикс "is_" ко всем ключам объекта T.

type PrefixKeysWithIs<T> = { [K in keyof T as `is_${K & string}`]: T[K] };

// Проверки (не менять):
type Test = Expect<Equal<PrefixKeysWithIs<{ active: boolean }>, { is_active: boolean }>>;
