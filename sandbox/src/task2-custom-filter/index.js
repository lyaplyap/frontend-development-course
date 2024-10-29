/**
 * Кастомная реализация метода Array.prototype.filter
 * 
 * @param {Array} array Массив
 * @param {(...args: any[]) => Boolean} filterFn Фильтрующая булева функция (та, которая в качестве результата возвращает true или false)
 * @param {Boolean} inplace Флаг "модифицируем исходный массив или нет"
 * @returns {Array} Отфильтрованный массив
 */
export const filter = (array, filterFn, inplace = false) => {
    // Если inplace=true, создаем новый массив
    const resArr = inplace ? [] : [];

    // Проходимся по исходному массиву
    for (let i = 0; i < array.length; i++) {
        // Если элемент удовлетворяет условию, добавляем его в отфильтрованный массив
        if (filterFn(array[i], i, array)) {
            resArr.push(array[i]);
        }
    }

    // Если inplace=true, модифицируем исходный массив, убирая из него лишние элементы
    if (inplace) {
        // Очистим исходный массив и добавим в него только отфильтрованные элементы
        array.length = 0;
        resArr.forEach(element => array.push(element));
        return array;
    }

    // Вернем отфильтрованный массив
    return resArr;
};
