const calculator = {
    add(a, b) {
        return typeof a === 'number' && typeof b === 'number' ? 
        a + b : 'no valid';
    },

    subtract(a, b) {
        return typeof a === 'number' && typeof b === 'number' ?
        a - b : 'no valid';
    },

    multiple(a, b) {
        return typeof a === 'number' && typeof b === 'number' ?
        Math.round(a * b * 10) / 10   : 'no valid';
    },

    divide(a, b) {
        return typeof a !== 'number' || typeof b !== 'number' ?
        'no valid' : 
        (a === 1 && b === 0) || (a === 0 && b === 0)?
        'no valid' :
        Math.round(a / b * 10) / 10 ;
    }
}

module.exports = calculator;