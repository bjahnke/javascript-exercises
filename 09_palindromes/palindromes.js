const palindromes = function (str) {
    const strFormatted = str.toLowerCase().match(/[a-z0-9]/g).join('');

    const reversed = strFormatted.split('').reverse().join('');
    return strFormatted === reversed;
};

// Do not edit below this line
module.exports = palindromes;
