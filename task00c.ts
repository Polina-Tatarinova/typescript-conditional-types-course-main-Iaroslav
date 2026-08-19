import { Expect, Equal } from './helpers';

// Задача: Условные типы (Conditional Types)
// Описание: Условные типы работают как тернарный оператор в JavaScript: X extends Y ? A : B.
// Если тип X можно присвоить типу Y, результатом будет тип A, иначе B.
// Пример: type IsString<T> = T extends string ? true : false;
// Задание: Создайте тип IsNumber<T>, который возвращает true, если T является числом (number), и false в противном случае.

type IsNumber<T> = T extends number ? true : false;

// Проверки (не менять):
type Test1 = Expect<Equal<IsNumber<42>, true>>;
type Test2 = Expect<Equal<IsNumber<string>, false>>;
