/**
 * Возвращает объект с количеством вхождений типов в переданном объекте
 * 
 * @param {Object} obj Объект
 * @returns {Object} Объект с количеством вхождений типов
 */
export const solutionFn = (obj) => {
    const typeCount = {};
    
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const type = typeof obj[key];
            if (typeCount[type]) {
                typeCount[type]++;
            } else {
                typeCount[type] = 1;
            }
        }
    }

    return typeCount;
};