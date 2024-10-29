/**
 * Возвращает одноразрядное число, полученное в результате итеративного перемножения всех цифр числа
 * 
 * @param {Number} num
 * @returns {Number}
 */

export const solutionFn = (num) => {
    // Перемножаем цифры числа пока оно не станет одноразрядным
    while (num >= 10) {
        let product = 1;
        while (num > 0) {
            product *= num % 10;
            num = Math.floor(num / 10);
        }
        num = product;
    }
    // Возвращаем одноразрядное число
    return num;
};
