export function caesarCipher(string, key) {
    if (key < -25 || key > 25) {
        throw new Error('Key is out of range. Only allow numbers from -25 to 25');
    }
    const cipher = "";
    const stringArr = string.split('');
    for (const iterator of stringArr) {
        if (/[a-z]/gi.test(iterator)) {
            indexAfterShift(iterator, key)
        }

    }
    return cipher;
}

// this function returns the proper index after a shift. Expected to also loop past 0 or 25, this depends on direction of the shift(-/+)
export function indexAfterShift(letter, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let index = alphabet.indexOf(letter) + shift;

    if (index > 25) {
        
    }
    if (index < 0) {
        
    }

    return index;
}

