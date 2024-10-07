import { describe, expect, test } from '@jest/globals';

import { solutionFn } from ".";

describe('Задача №10. Задача с собеседования', () => {
    test('Для одноразрядного числа функция должна возвращать само это число', () => {
        expect(solutionFn(4)).toEqual(4);
    });

    test('Для многоразрядного числа фукнция должна корректно перемножать его цифры', () => {
        expect(solutionFn(999)).toEqual(2);
    });
});
