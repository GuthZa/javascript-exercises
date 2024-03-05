const repeatString = function(str, n) {

    let strAux = "";
    if (n < 0) return "ERROR";
    for(let i = 0; i < n; i++)
        strAux += str;
    return strAux;
};

// Do not edit below this line
module.exports = repeatString;
