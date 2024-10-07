import { describe, expect, test } from '@jest/globals';

import { createCalculator } from ".";

describe('Задача №0. Замкнутый калькулятор', () => {
    test('Калькулятор должен быть объектом с методами add, subtract, multiply, divide, result и reset', () => {
        const calculator = createCalculator();

        expect(calculator).toBeInstanceOf(Object);
        expect(calculator).toHaveProperty('add');
        expect(calculator).toHaveProperty('subtract');
        expect(calculator).toHaveProperty('multiply');
        expect(calculator).toHaveProperty('divide');
        expect(calculator).toHaveProperty('result');
        expect(calculator).toHaveProperty('reset');
    });

    test('Метод add должен корректно отрабатывать', () => {
        const calculator = createCalculator();

        expect(calculator.add(42).result()).toEqual(42);
    });

    test('Метод subtract должен корректно отрабатывать', () => {
        const calculator = createCalculator();

        expect(calculator.subtract(42).result()).toEqual(-42);
    });

    test('Метод multiply должен корректно отрабатывать', () => {
        const calculator = createCalculator();

        expect(calculator.add(2).multiply(21).result()).toEqual(42);
    });

    test('Метод divide должен корректно отрабатывать', () => {
        const calculator = createCalculator();

        expect(calculator.add(42).divide(2).result()).toEqual(21);
    });

    test('Метод reset должен корректно отрабатывать', () => {
        const calculator = createCalculator();

        expect(calculator.add(42).divide(2).reset().result()).toEqual(0);
    });
});
