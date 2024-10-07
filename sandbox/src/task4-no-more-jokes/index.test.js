import { describe, expect, test } from '@jest/globals';

import { sum } from ".";

describe('Задача №4. Больше никаких шуток про 1 + \'1\' === \'11\'', () => {
    test('Функция должна выкидывать ошибку "Operands are not numbers", если ни один из операндов не является числом', () => {
        expect(() => sum('non number', 'yet another non number')).toThrowError('Operands are not numbers');
    });

    test('Функция должна выкидывать ошибку "The left operand is not number", если левый операнд не является числом', () => {
        expect(() => sum('non number', 2)).toThrowError('The left operand is not number');
    });

    test('Функция должна выкидывать ошибку "The right operand is not number", если правый операнд не является числом', () => {
        expect(() => sum(2, 'non number')).toThrowError('The right operand is not number');
    });

    test('Функция должна возвращать сумму операндов, если они оба являются числами', () => {
        expect(sum(2, 2)).toEqual(4);
    });
});
