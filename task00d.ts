import { Expect, Equal } from './helpers';

// Задача: Сопоставленные типы (Mapped Types)
// Описание: Mapped Types позволяют итерироваться по ключам объекта с помощью синтаксиса [K in keyof T].
// Во время обхода можно добавлять модификаторы, такие как readonly или ? (опциональность).
// Пример клонирования объекта: type Clone<T> = { [K in keyof T]: T[K] };
// Задание: Создайте тип CloneAndMakeReadonly<T>, который копирует все свойства объекта T и делает их readonly.

type CloneAndMakeReadonly<T> = {readonly [K in keyof T]: T[K]};

// Проверки (не менять):
type Test = Expect<Equal<CloneAndMakeReadonly<{ name: string }>, { readonly name: string }>>;
