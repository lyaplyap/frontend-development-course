/**
 * Возвращает минимальную систему контроля версий
 * 
 * @param {Array} initialCommit 
 * @returns {Object}
 */
export const getMinimalCVS = (initialCommit) => {
    
    const vers = [initialCommit.slice()];

    return {
        head: () => vers[vers.length - 1], // возвращает последнюю версию
        history: () => vers.slice(), // возвращает всю историю
        push: (element) => {
            // создаем новую версию
            const newVer = vers[vers.length - 1].concat(element);
            vers.push(newVer); // сохраняем новую версию
        },
        pop: () => {
            const lastVersion = vers[vers.length - 1];
            if (lastVersion.length === 0) return undefined; // если последняя версия пустая, возвращаем undefined
            const newVer = lastVersion.slice(0, -1); // создаем новую версию
            vers.push(newVer); // сохраняем новую версию
            return lastVersion[lastVersion.length - 1]; // возвращаем последний элемент
        }
    };
};
