
/**
 * Возвращает одноразрядное число, полученное в результате итеративного перемножения всех цифр числа
 * 
 * @param {Number} num
 * @returns {Number}
 */
export const solutionFn = (num) => {
    const multiplyDigits = (n) => {
        return n.toString().split('').reduce((product, digit) => product * parseInt(digit), 1);
    };

    while (num >= 10) {
        num = multiplyDigits(num);
    }

    return num;
};
