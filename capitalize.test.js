import { capitalize } from "./capitalize"

test('First letter is uppercase',()=> { 
    expect(capitalize('test').split('')[0]).toMatch(/T/);
})

test('Is a String',()=> { 
    expect(Number.isInteger(capitalize('test'))).toBeFalsy();
    expect(Array.isArray(capitalize('test'))).toBeFalsy();
    expect(typeof(capitalize('test')) === "string").toBeTruthy();
})

