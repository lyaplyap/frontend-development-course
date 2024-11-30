/**
 * Возвращает объект с количеством вхождений типов в переданном объекте
 * 
 * @param {Object} obj Объект
 * @returns {Object} Объект с количеством вхождений типов
 */
export const solutionFn = (obj) => {
    const typeNumbers = {}; // Объект с количеством вхождений типов
    
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const type = typeof obj[key];
            // Обновляем количество вхождений типов
            typeNumbers[type] = (typeNumbers[type] || 0) + 1;
        }
    }
    
    return typeNumbers;
};
