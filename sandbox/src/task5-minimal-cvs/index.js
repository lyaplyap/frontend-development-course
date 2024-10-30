
/**
 * Возвращает минимальную систему контроля версий
 * 
 * @param {Array} initialCommit
 * @returns {Object}
 */
export const getMinimalCVS = (initialCommit) => {
    let history = [initialCommit];

    return {
        head: () => {
            return history[history.length - 1];
        },
        history: () => {
            return [...history];
        },
        push: (element) => {
            const newVersion = [...history[history.length - 1], element];
            history.push(newVersion);
        },
        pop: () => {
            const latestVersion = history[history.length - 1];
            if (latestVersion.length > 0) {
                const poppedElement = latestVersion[latestVersion.length - 1];
                const newVersion = latestVersion.slice(0, -1);
                history.push(newVersion);
                return poppedElement;
            } else {
                return undefined;
            }
        }
    };
};
