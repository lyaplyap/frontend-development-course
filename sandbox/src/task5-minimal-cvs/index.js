
/**
 * Возвращает минимальную систему контроля версий
 * 
 * @param {Array} initialCommit 
 * @returns {Object}
 */
export const getMinimalCVS = (initialCommit) => {
    const versions = [ [...initialCommit] ];  // Копия начального массива

    return {
        head: () => versions[versions.length - 1],  // Возвращает последнюю версию
        history: () => [...versions],               // Возвращает все версии массива
        push: (element) => {
            const newVersion = [...versions[versions.length - 1], element];  // Копия последней версии + новый элемент
            versions.push(newVersion);   // Сохранение новой версии
        },
        pop: () => {
            const lastVersion = versions[versions.length - 1];
            if (lastVersion.length === 0) return undefined;  // Возвращает undefined, если массив пуст
            const newVersion = lastVersion.slice(0, -1);     // Копия последней версии без последнего элемента
            versions.push(newVersion);                       // Сохранение новой версии
            return lastVersion[lastVersion.length - 1];      // Возвращаемый удаленный элемент
        }
    };
};
