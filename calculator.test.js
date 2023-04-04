import { calculator } from "./calculator"

test('add 1 and 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toEqual(3)
})

test('subtract 5 from 10 to equal 5', () => {
    expect(calculator.subtract(10, 5)).toEqual(5)
})

test('divide 4 and 2 to equal 2', () => {
    expect(calculator.divide(4, 2)).toEqual(2)
})

test('multiply 3 and 10 to equal 30', () => {
    expect(calculator.multiply(3, 10)).toEqual(30)
})
