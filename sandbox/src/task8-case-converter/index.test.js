import { describe, expect, test } from '@jest/globals';

import { solutionFn } from ".";

describe('Задача №8. Case Converter', () => {
    test('Функция должна корректно конвертировать строку из несколько слов из snake_case в camelCase', () => {
        expect(solutionFn('data_in_snake_case')).toEqual('dataInSnakeCase');
    });

    test('Функция должна корректно конвертировать строку из одного слова из snake_case в camelCase', () => {
        expect(solutionFn('something')).toEqual('something');
    });
});
