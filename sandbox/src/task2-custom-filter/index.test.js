import { describe, expect, test } from '@jest/globals';

import { filter } from ".";

describe('Задача №2. Custom Array.prototype.filter', () => {
    const isEven = (num) => (num % 2) === 0;

    test('Функция должна возвращать корректно отфильтрованный массив', () => {
        const array = [1, 2, 3, 4, 5, 6];
        const filteredArray = filter(array, isEven);
        
        expect(filteredArray).toEqual([2, 4, 6]); 
    });

    test('Функция должна возвращать новый массив, если передан аргумент inplace=false', () => {
        const array = [1, 2, 3, 4, 5, 6];
        const filteredArray = filter(array, isEven, false);
        
        expect(filteredArray).not.toBe(array); 
    });

    test('Функция не должна модифицировать исходный массив, если передан аргумент inplace=false', () => {
        const array = [1, 2, 3, 4, 5, 6];

        filter(array, isEven, false);

        expect(array).toEqual([1, 2, 3, 4, 5, 6]); 
    });

    test('Функция должна возвращать исходный массив, если передан аргумент inplace=true', () => {
        const array = [1, 2, 3, 4, 5, 6];
        const filteredArray = filter(array, isEven, true);
        
        expect(filteredArray).toBe(array); 
    });

    test('Функция должна модифицировать исходный массив, если передан аргумент inplace=true', () => {
        const array = [1, 2, 3, 4, 5, 6];

        filter(array, isEven, true);

        expect(array).toEqual([2, 4, 6]); 
    });
});
