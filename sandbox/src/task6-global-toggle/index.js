/**
 * Глобальный переключатель стилей
 * 
 * @param {String} className Название класса
 */
export const globalToggle = (className) => {
    // Определение классов
    const isActiveCls = className.endsWith('_active');
    const defaultCls = isActiveCls ? className.replace('_active', '') : className;
    const activeCls = isActiveCls ? className : `${className}_active`;

    // Поиск элементов
    const defaultElements = document.querySelectorAll(`.${defaultCls}`);
    const activeElems = document.querySelectorAll(`.${activeCls}`);
    
    // Если нет дефолтных элементов и нет активных, то ничего не делаем
    if (defaultElements.length === 0 && activeElems.length === 0) {
        return;
    }

    // Переключаем дефолтные элементы на активный
    defaultElements.forEach(element => {
        element.classList.remove(defaultCls);
        element.classList.add(activeCls);
    });

    // Переключаем активные элементы на дефолтный
    activeElems.forEach(element => {
        element.classList.remove(activeCls);
        element.classList.add(defaultCls);
    });
};
