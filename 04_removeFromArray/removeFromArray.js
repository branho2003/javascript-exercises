const removeFromArray = function(a, ...arg) {
    const arr = [];
    a.forEach(element => { 
        if (!arg.includes(element)) {
            arr.push(element);
        }
    });

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
