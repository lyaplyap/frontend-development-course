/**
 * Возвращает сумму всех чётных чисел в массиве
 *
 * @param {number[]} numbers Массив чисел
 * @returns {number} Сумма чётных чисел
 */
export const solutionFn = (numbers) => {
    return numbers.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
};
