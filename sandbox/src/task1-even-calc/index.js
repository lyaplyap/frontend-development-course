/**
 * Возвращает сумму всех чётных чисел в массиве
 * 
 * @param {number[]} numbers Массив чисел
 * @returns {number} Сумма чётных чисел
 */
export const solutionFn = (numbers) => {
    // reduce для суммы всех чётных чисел
    return numbers.reduce((collector, current) => {
        // Проверка на чётность
        return current % 2 === 0 ? collector + current : collector;
    }, 0); // Начальное значение collector — 0
};
