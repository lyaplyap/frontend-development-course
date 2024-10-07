import { describe, expect, test } from '@jest/globals';

import { getMinimalCVS } from ".";

describe('Задача №5. CVS на минималках', () => {
    test('Функция должна возвращать объект с методами head, history, push и pop', () => {
        const cvs = getMinimalCVS(['a', 'b', 'c']);

        expect(cvs).toBeInstanceOf(Object);
        expect(cvs).toHaveProperty('head');
        expect(cvs).toHaveProperty('history');
        expect(cvs).toHaveProperty('push');
        expect(cvs).toHaveProperty('pop');
    });

    test('Метод head должен корректно отрабатывать', () => {
        const cvs = getMinimalCVS(['a', 'b']);

        cvs.push('c');
        cvs.push('d');

        expect(cvs.head()).toEqual(['a', 'b', 'c', 'd']);
    });

    test('Метод history должен корректно отрабатывать', () => {
        const cvs = getMinimalCVS(['a', 'b']);

        cvs.push('c');

        expect(cvs.history()).toEqual([['a', 'b'], ['a', 'b', 'c']]);
    });

    test('Метод pop должен корректно отрабатывать', () => {
        const cvs = getMinimalCVS(['a', 'b', 'c']);
        
        const element = cvs.pop();
        const head = cvs.head();

        expect(element).toEqual('c');
        expect(head).toEqual(['a', 'b']);
    });
});
