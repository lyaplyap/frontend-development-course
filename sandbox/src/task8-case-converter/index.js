/**
 * Case Converter
 * 
 * @param {String} snakeCaseString Строка в snake_case
 * @returns {String} Строка в camelCase
 */
export const solutionFn = (snakeCaseString) => {
    // Разбиваем строку на слова по нижнему подчёркиванию
    const words = snakeCaseString.split('_');

    // Конвертируем каждое слово в camelCase
    const camelCaseString = words
        .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
        .join('');

    return camelCaseString;
};
