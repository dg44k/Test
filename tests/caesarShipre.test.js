const caesarCipher = require('./caesarShipre');

test('cipher', () => {
    expect(caesarCipher('abcd', 1)).toBe('bcde');
})
test('cipher', () => {
    expect(caesarCipher('abcd. ac', 2)).toBe('cdef. ce');
})
test('cipher', () => {
    expect(caesarCipher('Abc', 1)).toBe('Bcd');
})
test('cipher', () => {
    expect(caesarCipher('Abz', 2)).toBe('Bdb');
})
test('cipher', () => {
    expect(caesarCipher('asd', 25)).toBe('zrc');
})