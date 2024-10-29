/**
 * Глобальный переключатель стилей
 * 
 * @param {String} className Название класса
 */
export const globalToggle = (className) => {

    const isActive = className.endsWith('_active');
    const defaultClass = isActive ? className.replace('_active', '') : className;
    const activeClass = isActive ? className : `${className}_active`;

    const defaultElements = document.querySelectorAll(`.${defaultClass}`);
    const activeElements = document.querySelectorAll(`.${activeClass}`);

    if (defaultElements.length === 0 && activeElements.length === 0) return;

    defaultElements.forEach(element => {
        element.classList.remove(defaultClass);
        element.classList.add(activeClass);
    });

    activeElements.forEach(element => {
        element.classList.remove(activeClass);
        element.classList.add(defaultClass);
    });
};
