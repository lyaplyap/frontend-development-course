/**
 * Возвращает одноразрядное число, полученное в результате итеративного перемножения всех цифр числа
 * 
 * @param {Number} num
 * @returns {Number}
 */
export const solutionFn = (num) => {
    while (num >= 10) {  // пока число не станет однозначным
        num = num.toString()  // преобразуем число в строку, чтобы разделить на цифры
                  .split('')  // разбиваем на массив цифр
                  .reduce((product, digit) => product * Number(digit), 1);  // перемножаем все цифры
    }
    return num;
};
