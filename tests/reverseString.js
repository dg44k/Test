function reverseString(string) {
    if(string === '') return "Empty string";
    else if (typeof string === 'number') return 'is not string'
    else {
        return string.split('').reverse().join('');
    }
}
module.exports = reverseString;