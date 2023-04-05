const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function caesarCipher(string, key) {
    if (key < -25 || key > 25) {
        throw new Error('Key is out of range. Only allow numbers from -25 to 25');
    }
    let cipher = "";
    const stringArr = string.split('');
    for (let iterator of stringArr) {
        if (/[a-z]/g.test(iterator)) {
            iterator = lowercaseAlphabet[indexAfterShift(iterator, key)];
        }
        if (/[A-Z]/g.test(iterator)) {
            iterator = uppercaseAlphabet[indexAfterShift(iterator, key)];
        }
        cipher += iterator;
    }
    return cipher;
}

export function indexAfterShift(letter, shift) {
    letter = letter.toLowerCase();
    let index = lowercaseAlphabet.indexOf(letter) + shift;

    if (index > 25) {
        index -= 26;
    }
    if (index < 0) {
        index += 26;
    }

    return index;
}

