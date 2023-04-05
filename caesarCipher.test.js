import { caesarCipher, indexAfterShift } from "./caesarCipher";

test('no shift (+/-0)', () => {
    expect(caesarCipher('abcDEFghi', 0)).toMatch(/abcDEFghi/);
    expect(caesarCipher('jklmnopqrs', 0)).toMatch(/jklmnopqrs/);
    expect(caesarCipher('tu vwx yz', 0)).toMatch(/tu vwx yz/);
    expect(caesarCipher('ONE 2 THR33 4OUR', 0)).toMatch(/ONE 2 THR33 4OUR/);
})

test('positive shift (+)', () => {
    expect(caesarCipher('abc', 3)).toMatch(/def/);
    expect(caesarCipher('tu vwx yz', 10)).toMatch(/de fgh ij/);
    expect(caesarCipher('ONE 2 THR33 4OUR', 25)).toMatch(/NMD 2 SGQ33 4NTQ/);
    expect(caesarCipher('z', 1)).toMatch(/a/);
})

test('negative shift (-)', () => {
    expect(caesarCipher('abc', -3)).toMatch(/xyz/);
    expect(caesarCipher('tu hj mw', -10)).toMatch(/jk xz cm/);
    expect(caesarCipher('ONE 2 THR33 4OUR', -25)).toMatch(/POF 2 UIS33 4PVS/);
    expect(caesarCipher('a', -1)).toMatch(/z/);
})

test('key range is any number from -25 to 25', () => {
    expect(() => caesarCipher('a', -30)).toThrow('Key is out of range. Only allow numbers from -25 to 25');
    expect(() => caesarCipher('a', 30)).toThrow('Key is out of range. Only allow numbers from -25 to 25');
})

test('Index after + shift', () => {
    expect(indexAfterShift('f', 2)).toBe(7);
    expect(indexAfterShift('F', 2)).toBe(7);
})

test('Index after - shift', () => {
    expect(indexAfterShift('u', -5)).toBe(15);
    expect(indexAfterShift('U', -5)).toBe(15);
})

test('Wrap past index 25 with shift', () => {
    expect(indexAfterShift('x', 9)).toBe(6);
    expect(indexAfterShift('X', 9)).toBe(6);
})

test('Wrap past index 0 with shift', () => {
    expect(indexAfterShift('f', -12)).toBe(19);
    expect(indexAfterShift('F', -12)).toBe(19);
})

