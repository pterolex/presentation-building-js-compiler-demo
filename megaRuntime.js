function OR(left, right) {
    return left || right;
}

function AND(left, right) {
    return left && right;
}

function NOT(argument) {
    return !argument;
}

module.exports = {
    OR,
    AND,
    NOT
};
