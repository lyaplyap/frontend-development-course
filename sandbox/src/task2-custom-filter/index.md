### Задача №2. Custom Array.prototype.filter

#### Условие

У массивов есть встроенный метод [filter](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), который создаёт новый массив со всеми элементами, удовлетворяющими переданной булевой функции.

Реализуйте собственную функцию фильтрации массива, в следующем формате:

```js
/**
 * Кастомная реализация метода Array.prototype.filter
 * 
 * @param {Array} array Массив
 * @param {(...args: any[]) => Boolean} filterFn Фильтрующая булева функция (та, которая в качестве результата возвращает true или false)
 * @param {Boolean} inplace Флаг "модифицируем исходный массив или нет"
 * @returns {Array} Отфильтрованный массив
 */
export const filter = (array, filterFn, inplace = false) => {
    // Ваш код здесь
};
```

#### Пример

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// Выбираем из массива words все слова, длина которых больше 6 символов
const result = words.filter((word) => word.length > 6);

console.log(result); // ["exuberant", "destruction", "present"]
```

#### Примечание

Гарантируется, что фильтрующая функции всегда корректная, обработку ошибок и валидацию исходных данных в решении можно не закладывать.

**N.B.** Функция не должна использовать нативный метод `Array.prototype.filter`.

#### Подсказка

Чтобы модифицировать исходный массив можно использовать встроенный метод [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).
