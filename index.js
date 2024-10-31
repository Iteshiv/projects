function analyzeArray(arr) {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / arr.length;
    const max = Math.max(...arr);
    
    return {
        sum: sum,
        average: average,
        max: max
    };
}

let arr = [23, 45, 56, 73, 45, 23, 98];
const result = analyzeArray(arr);
console.log(result);
