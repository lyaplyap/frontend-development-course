/**
 * Валидирует операнды и возвращает их сумму
 * 
 * @param {unknown} leftOperand Левый операнд
 * @param {unknown} rightOperand Правый операнд
 * @returns {Number} Сумма операндов
 */
export const sum = (leftOperand, rightOperand) => {
    // Проверка, являются ли операнды числами
    const isLeftNumber = typeof leftOperand === 'number';
    const isRightNumber = typeof rightOperand === 'number';

    // Если хотя бы один из операндов не является числом, выкидываем ошибку
    if (!isLeftNumber && !isRightNumber) {
        throw new Error("Operands are not numbers");
    }
    if (!isLeftNumber) {
        throw new Error("The left operand is not number");
    }
    if (!isRightNumber) {
        throw new Error("The right operand is not number");
    }

    // Если оба операнда являются числами, возвращаем их сумму
    return leftOperand + rightOperand;
};
