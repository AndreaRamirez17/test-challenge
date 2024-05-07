function validateDNA(dnaString) {
    // Si la cadena de ADN es nula, vacía o no es una cadena, devolver false
    if (!dnaString || typeof dnaString !== 'string') {
        return false;
    }

    // Verificar si la cadena de ADN contiene caracteres en minúscula
    for (let i = 0; i < dnaString.length; i++) {
        if (dnaString[i] !== dnaString[i].toUpperCase()) {
            return false; // Devolver false si hay caracteres en minúscula
        }
    }

    // Convertir la cadena de ADN a mayúsculas
    dnaString = dnaString.toUpperCase();

    // Caracteres permitidos
    const allowedCharacters = ['C', 'T', 'A', 'G'];

    // Verificar si todos los caracteres en la cadena de ADN son permitidos
    const isValid = dnaString.split('').every(char => allowedCharacters.includes(char)); //se pueden usar expresiones regulares para simplifica el codigo como /^[CTAG]+$/ 

    return isValid;
}
module.exports = { validateDNA};

