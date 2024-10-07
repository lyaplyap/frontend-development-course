import { describe, expect, test } from '@jest/globals';

import { isSpam } from ".";

describe('Задача №9. Антиспам', () => {
    test('Функция должна корректно определять спам-письма', () => {
        const mail = 'Big sales, get a huge bonus simply!!';
        const keywords = ['bonus', 'easy', 'sales'];

        expect(isSpam(mail, keywords)).toBe(true);
    });

    test('Функция должна корректно определять не спам-письма', () => {
        const mail = 'Somebody once told me';
        const keywords = ['bonus', 'easy', 'sales'];

        expect(isSpam(mail, keywords)).toBe(false);
    });
});
