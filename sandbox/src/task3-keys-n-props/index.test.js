import { describe, expect, test } from '@jest/globals';

import { solutionFn } from ".";

describe('Задача №3. Ключи и свойства', () => {
    test('Функция должна возвращать корректный объект вхождений типов', () => {
        const initialObject = {
            a: 'some string 1',
            b: 42,
            c: { c1: 'some string 2' },
            d: [],
            e: 123,
            f: null,
            g: undefined
        };

        const resultObject = solutionFn(initialObject);

        const expectedObject = {
            string: 1,
            number: 2,
            object: 3,
            undefined: 1
        };
        
        expect(resultObject).toEqual(expectedObject);
    }); 
});
