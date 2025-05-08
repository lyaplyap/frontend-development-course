/**
 * Бей или беги
 * 
 * @param {Number} a Левая граница
 * @param {Number} b Правая граница
 * @returns {('hit' | 'run')}
 */
export const hitOrRun = (a, b) => {
    // Генерируем случайное число в промежутке [a, b]
    const randomNum = Math.floor(Math.random() * (b - a + 1)) + a;

    // Проверяем, является ли число простым
    const isSimple = (number) => {
        if (number <= 1) return false;
        if (number <= 3) return true;
        if (number % 2 === 0 || number % 3 === 0) return false;
        for (let i = 5; i * i <= number; i += 6) {
            if (number % i === 0 || number % (i + 2) === 0) return false;
        }
        return true;
    };

    // Возвращаем строку "hit" или "run"
    return isSimple(randomNum) ? 'run' : 'hit';
};
