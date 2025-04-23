/**
 * Возвращает сумму всех чётных чисел в массиве
 * 
 * @param {number[]} numbers Массив чисел
 * @returns {number} Сумма чётных чисел
 */
export const solutionFn = (numbers) => {
    return numbers.reduce((accumulator, currentValue) => 
        accumulator + (currentValue % 2 === 0 ? currentValue : 0), 0);
};