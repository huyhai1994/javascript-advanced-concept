/*TODO: su dung destructuring*/
/*TODO: To illustrate destructuring, we'll make a sandwich.
    Do you take everything out of the refrigerator to make
    your sandwich? No, you only take out the items you would
    like to use on your sandwich.
    Destructuring is exactly the same. We may have an array
    or object that we are working with,
    but we only need some of the items contained in these.
    Destructuring makes it easy to extract only what is needed.*/
let user = {
    name: 'John Doe', age: 30, address: {
        street: '123 Main St', city: 'New York', state: 'NY'
    }
}
const {name} = user;
console.log(name); // Output: John Doe