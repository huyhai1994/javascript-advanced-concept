/*TODO: demo rest parameter
        The rest parameter (...) allows a function to
        treat an indefinite number of arguments as an array:*/
function sumAll(...numbers) {
    let result = 0;
    for (const numbersKey in numbers) {
        result += numbers[numbersKey];
    }
    return result;
}

console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15