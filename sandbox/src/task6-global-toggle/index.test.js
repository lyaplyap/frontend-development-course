import { beforeEach, describe, expect, test } from '@jest/globals';

import { globalToggle } from ".";

describe('Задача №6. Глобальный переключатель', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    });

    test('Глобальный переключатель должен корректно работать, когда переданный класс есть в DOM', () => {
        document.body.innerHTML = '<div class="tag">Ga</div><div>Ga Ga</div><div class="tag_active">Ga Ga Ga</div>';

        globalToggle('tag');

        expect(document.body.innerHTML).toEqual('<div class="tag_active">Ga</div><div>Ga Ga</div><div class="tag">Ga Ga Ga</div>');
    });

    test('Глобальный переключатель должен корректно работать, когда переданного класса нет в DOM', () => {
        document.body.innerHTML = '<div class="tag">Ga</div><div>Ga Ga</div><div class="tag_active">Ga Ga Ga</div>';

        globalToggle('button');

        expect(document.body.innerHTML).toEqual('<div class="tag">Ga</div><div>Ga Ga</div><div class="tag_active">Ga Ga Ga</div>');
    });
});
