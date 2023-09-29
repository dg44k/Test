const reverseString = require('./reverseString');

test('Reverse string', () => {
    expect(reverseString('asd')).toBe('dsa');
});
test('Reverse string', () => {
    expect(reverseString('Asd')).toBe('dsA');
});
test('Reverse string', () => {
    expect(reverseString('asd fgh')).toBe('hgf dsa');
});
test('Reverse string', () => {
    expect(reverseString('123')).toBe('321');
});
test('Reverse string', () => {
    expect(reverseString('$%^')).toBe('^%$');
});
test('Reverse string', () => {
    expect(reverseString('')).toBe('Empty string');
});
test('Reverse string', () => {
    expect(reverseString(123)).toBe('is not string');
});
