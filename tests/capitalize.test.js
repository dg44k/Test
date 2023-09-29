const capitalize = require('./capitalize');

test("Вернуть слово с заглавной буквой", () => {
    expect(capitalize("farm")).toBe("Farm");
});
test("Вернуть слово с заглавной буквой", () => {
    expect(capitalize("Farm")).toBe("Farm");
});
test("Вернуть строку с заглавной буквой", () => {
    expect(capitalize("farm farm farm")).toBe("Farm farm farm");
});
test("Вернуть слово с заглавной буквой", () => {
    expect(capitalize(" farm")).toBe("Farm");
});
test("Вернуть слово с заглавной буквой", () => {
    expect(capitalize("FARM")).toBe("FARM");
});
test("Вернуть no valid", () => {
    expect(capitalize("123")).toBe("no valid");
});
test("Вернуть no valid", () => {
    expect(capitalize("@#$")).toBe("no valid");
});
test("Вернуть no valid", () => {
    expect(capitalize("as12")).toBe("As12");
});
test("Вернуть no valid", () => {
    expect(capitalize("&s12")).toBe("&s12");
});

