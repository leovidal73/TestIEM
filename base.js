const symboleValue = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1,
};

function transform(romain) {
    const numberArray = romain.split('').map(x => symboleValue[x]);
    let res = 0;
    let previous = -1;
    for(let i=numberArray.length-1; i>=0; i--) {
        if (numberArray[i]<previous) {
            res-= numberArray[i];
        } else {
            res+= numberArray[i];
        }
        previous = numberArray[i];
    }
    return res;
}
