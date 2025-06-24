const sumAll = function (start, stop) {
    let result = 0;

    if (typeof start !== 'number' || typeof stop !== 'number') {
        return "ERROR";
    } 

    if (!Number.isInteger(start) || !Number.isInteger(stop) || start < 0 || stop < 0) {
        return "ERROR";
    }

    if (start > stop) {
        [start, stop] = [stop, start];
    }

    while (start <= stop) {
        result += start;
        start++;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
