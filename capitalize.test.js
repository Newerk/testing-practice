import { capitalize } from "./capitalize"

test('First letter is uppercase',()=> { 
    expect(capitalize('test').split('')[0]).toMatch(/T/);
    expect(capitalize('tHiS IS a SenTenCE!').split('')[0]).toMatch(/T/);
})

test('Is a String',()=> { 
    expect(Number.isInteger(capitalize('test'))).toBeFalsy();
    expect(Array.isArray(capitalize('test'))).toBeFalsy();
    expect(typeof(capitalize('test')) === "string").toBeTruthy();
})

test('No value entered', () => {
    expect(() => capitalize()).toThrow('Please enter a string');
})

test('Number was entered', () => {
    expect(() => capitalize(555)).toThrow('Please enter a string');
})
