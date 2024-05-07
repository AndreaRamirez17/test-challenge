function fac(n) {
    if (Number.isInteger(n) && n >= 0) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * fac(n - 1);
        }
    } else {
        console.log("No se puede calcular el factorial de números negativos y numeros no enteros.");
        return null;
    }
}
module.exports = { fac };