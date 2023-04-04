import { reverseString } from "./reverseString";

test('Reverses String', () => {
    expect(reverseString('Dictionary')).toMatch(/yranoitciD/);
    expect(reverseString('12345')).toMatch(/54321/);
})

test('No value entered', () => {
    expect(() => reverseString()).toThrow('Please enter a string to reverse');
})

test('Is a string', () => {
    expect(typeof (reverseString('test')) === "string").toBeTruthy();
    expect(() => reverseString(1800)).toThrow('Please enter a string to reverse')
})