/**
 * Case Converter
 * 
 * @param {String} snakeCaseString Строка в snake_case
 * @returns {String} Строка в camelCase
 */
export const solutionFn = (snakeCaseString) => {
    return snakeCaseString
        .split('_')
        .map((word, index) =>
            index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
};
