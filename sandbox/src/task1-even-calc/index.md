### Задача №1. Калькулятор суммы чётных чисел

#### Условие

Напишите функцию, которая принимает массив чисел и возвращает сумму всех четных чисел в этом массиве.

#### Пример

```js
const numbers = [1, 2, 3, 4, 5, 6];

const result = solutionFn(numbers);

console.log(result); // 12
```

#### Подсказка

Задачу можно решать как обычным перебором массива, так и с помощью встроенного метода [reduce](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).
