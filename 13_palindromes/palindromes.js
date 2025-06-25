const palindromes = function (s) {
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
