const analyzeArray = require('./analyzeArray');

test('[]', () => {
    expect(analyzeArray([])).toBe('is empty')
})
test('[]', () => {
    expect(analyzeArray([1,2,3,4,5,6])).toBe({average: 3, min: 1, max: 6, length: 6})
})
test('[]', () => {
    expect(analyzeArray([1])).toBe({average: 1, min: 1, max: 1, length: 1})
})
test('[]', () => {
    expect(analyzeArray(['1a'])).toBe("no valid")
})