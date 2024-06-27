const palindromes = function (s) {
    let valid = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let newString = s.toLowerCase()
        .split('')
        .filter((char) => valid.includes(char))
        .join('');

    return newString == newString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
