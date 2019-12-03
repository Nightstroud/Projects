let result;
let tempArray = [];
let computations = 0;
let computationsLinear = 0;
function BinarySearch (arr = null, item = null) {
    if (arr === null) {
        return;
    }
    if (item === null) {
        return;
    }

    tempArray.push(...arr);
        while (1 === 1) {
            computations++;
            if (tempArray.length === 1) {
                if (tempArray[0] !== item) {
                    return result = false;
                }
                else return result = true;
            }
            if (tempArray[Math.floor(tempArray.length / 2)] === item) {
                return result = true;
            }
            else {
                if (tempArray[Math.floor(tempArray.length / 2)] > item) {
                    let placeholder = Math.floor(tempArray.length / 2);
                    for (let x = 0; x < placeholder; x++) {
                        tempArray.pop();
                    }
                }
                if (tempArray[Math.floor(tempArray.length / 2)] < item) {
                    let placeholder = Math.floor(tempArray.length / 2);
                    for (let x = 0; x < placeholder; x++) {
                        tempArray.shift();
                    }
                }
            }
        }
        if (result !== true) {
            result = false;
        }

        return result;
}
console.log(BinarySearch([1,2,3,4,5,6,7,8,9]));