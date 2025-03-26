/**
 * Возвращает объект с количеством вхождений типов в переданном объекте
 * 
 * @param {Object} obj Объект
 * @returns {Object} Объект с количеством вхождений типов
 */
export const solutionFn = (obj) => {
    let result = {};
    for (let [key, value] of Object.entries(obj)) {
        const type = typeof value;
        result[type] = (result[type] || 0) + 1;
    }
    return result;
};