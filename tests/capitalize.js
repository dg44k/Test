function capitalize(string) {
    string = string.trim();
    if(isUpperCase(string[0])) return string;
    else if(isNaN(+string) && isSymbol(string)) {
        return string[0].toUpperCase() + string.slice(1);
    } else {
        return 'no valid'
    }
}

function isUpperCase(char) {
    return char != char.toLowerCase();
}

function isSymbol(string) {
    return string.match(/[a-zA-Z]/g) !== null ? true : false;
}

module.exports = capitalize;