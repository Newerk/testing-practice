export function caesarCipher(string, key) {
    if (key < -25 || key > 25) {
        throw new Error('Key is out of range. Only allow numbers from -25 and 25');
    }

    const cipher = "";


    return cipher;
}

//this function returns the proper index after a shift. Expected to also loop past 0 or 25, this depends on direction of the shift(-/+)
export function indexAfterShift(start, shift) {

}
