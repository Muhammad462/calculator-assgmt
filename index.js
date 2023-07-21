function add(n1, n2) {
    return n1 + n2;
}
function sub(n1, n2) {
    return n1 - n2;
}
function multiply(n1, n2) {
    return n1 * n2;
}
function divide(n1, n2) {
    return n1 / n2;
}
function calculate(n1, n2, operator) {
    return operator(n1, n2);
}
console.log(calculate(4, 5, multiply));
