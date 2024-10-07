import { describe, expect, test } from '@jest/globals';

import { hitOrRun } from ".";

describe('Задача №7. Hit Or Run', () => {
    test('Функция должна возвращать hit для не простых чисел', () => {
        expect(hitOrRun(4, 4)).toEqual('hit');
    });

    test('Функция должна возвращать run для простых чисел', () => {
        expect(hitOrRun(7, 7)).toEqual('run');
    });
});
