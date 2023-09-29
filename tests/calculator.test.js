const calculator = require('./calculator');

test('add', () => {
    expect(calculator.add(2, 3)).toBe(5);
})
test('add', () => {
    expect(calculator.add(0, 0)).toBe(0);
})
test('add', () => {
    expect(calculator.add('2', '3')).toBe('no valid');
})
test('add', () => {
    expect(calculator.add('2', 3)).toBe('no valid');
})
test('add', () => {
    expect(calculator.add(-2, -3)).toBe(-5);
})
test('add', () => {
    expect(calculator.add(-2, 3)).toBe(1);
})
test('add', () => {
    expect(calculator.add(1.2, 3)).toBe(4.2);
})

test('minus', () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
})
test('minus', () => {
    expect(calculator.subtract(0, 0)).toBe(0);
})
test('minus', () => {
    expect(calculator.subtract('2', '3')).toBe('no valid');
})
test('minus', () => {
    expect(calculator.subtract('2', 3)).toBe('no valid');
})
test('minus', () => {
    expect(calculator.subtract(-2, -3)).toBe(1);
})
test('minus', () => {
    expect(calculator.subtract(-2, 3)).toBe(-5);
})
test('minus', () => {
    expect(calculator.subtract(1.2, 3)).toBe(-1.8);
})

test('divide', () => {
    expect(calculator.divide(2, 3)).toBe(0.7);
})
test('divide', () => {
    expect(calculator.divide(0, 0)).toBe('no valid');
})
test('divide', () => {
    expect(calculator.divide('2', '3')).toBe('no valid');
})
test('divide', () => {
    expect(calculator.divide('2', 3)).toBe('no valid');
})
test('divide', () => {
    expect(calculator.divide(-2, -3)).toBe(0.7);
})
test('divide', () => {
    expect(calculator.divide(-2, 3)).toBe(-0.7);
})
test('divide', () => {
    expect(calculator.divide(1.2, 3)).toBe(0.4);
})
test('divide', () => {
    expect(calculator.divide(1, 0)).toBe('no valid');
})

test('multiple', () => {
    expect(calculator.multiple(2, 3)).toBe(6);
})
test('multiple', () => {
    expect(calculator.multiple(0, 0)).toBe(0);
})
test('multiple', () => {
    expect(calculator.multiple('2', '3')).toBe('no valid');
})
test('multiple', () => {
    expect(calculator.multiple('2', 3)).toBe('no valid');
})
test('multiple', () => {
    expect(calculator.multiple(-2, -3)).toBe(6);
})
test('multiple', () => {
    expect(calculator.multiple(-2, 3)).toBe(-6);
})
test('multiple', () => {
    expect(calculator.multiple(1.2, 3)).toBe(3.6);
})