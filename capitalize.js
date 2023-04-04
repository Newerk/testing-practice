export function capitalize(value) {
    if (arguments.length === 0 || typeof (value) !== 'string') {
        throw new Error('Please enter a string');
    }

    return value.split('')[0].toUpperCase() + value.slice(1);
}

