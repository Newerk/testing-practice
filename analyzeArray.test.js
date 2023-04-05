import { analyzeArray } from "./analyzeArray";
const testArray = [1, 8, 3, 4, 2, 6];

test('Average', () => {
    expect(analyzeArray(testArray).average).toBe(4)
})
test('Min', () => {
    expect(analyzeArray(testArray).min).toBe(1)
})
test('Max', () => {
    expect(analyzeArray(testArray).max).toBe(8)
})
test('Length', () => {
    expect(analyzeArray(testArray).length).toBe(6)
})

test('Empty array', () => {
    expect(() => analyzeArray([])).toThrowError();
})

test('Size 1 array', () => {
    const arr = [42]
    expect(analyzeArray(arr).average).toBe(42);
    expect(analyzeArray(arr).min).toBe(42);
    expect(analyzeArray(arr).max).toBe(42);
    expect(analyzeArray(arr).length).toBe(1)
})
