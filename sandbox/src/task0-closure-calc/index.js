/**
 * Калькулятор на замыканиях
 * 
 * @returns {Object}
 */
export const createCalculator = () => {
    let _state = 0;

    return {
        add(num) {
            _state = _state + num;

            return this;
        },
        subtract(num) {
            _state = _state - num;

            return this;
        },
        multiply(num) {
            _state = _state * num;

            return this;
        },
        divide(num) {
            _state = _state / num;

            return this;
        },
        reset() {
            _state = 0;

            return this;
        },
        result() {
            return _state;
        }
    };
};
