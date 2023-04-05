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