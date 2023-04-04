export function reverseString(value) {

    if (arguments.length === 0 || typeof (value) !== 'string') {
        throw new Error('Please enter a string to reverse');
    }

    let arr = value.split('');
    let reversed = '';

    while (arr.length > 0) {
        reversed += arr.pop();
    }

    return reversed;
}