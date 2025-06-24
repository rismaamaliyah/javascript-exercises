const repeatString = function (word, num) {
    let result = "";
    if (num < 0) {
        result = "ERROR";
    } else if (num > 0) {
        for (let i = 0; i < num; i += 1){
            result += word;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
