/*TODO:
*  The JavaScript spread operator (...) allows us to quickly copy
*   all or part of an existing array or object into another array or object.*/
let originalArray = [1, 2, 3, 4, 5];
let testArray = originalArray;
let copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3, 4, 5]
console.log(originalArray === testArray); // Output: [1, 2, 3,]
/*TODO: Checking the references is same or not*/

let originalObject = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    }
};