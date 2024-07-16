/*TODO: Method 1 -> Using callback function*/
/*TODO: method 2 -> using promise object */
/*TODO: method 3-> using async*/
/*TODO:
        "async and await make promises easier to write"
        async makes a function return a Promise
        await makes a function wait for a Promise
*/

/*TODO demo  dong bo */
function start() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Starting')
            resolve("xin chao")
        }, 2000);

    })

}

function doing() {
    return new Promise((resolve, reject) => {
        setTimeout(() => console.log('Doing'), 1000);
    })
}

const end = () => {
    console.log('Ending');
}

async function run() {
    const r1 = await start();
    console.log(r1);
    await doing();
}

async function myFunction() {
    return "Hello";
}

myFunction().then(
    function (value) {
        myDisplayer(value);
    },
    function (error) {
        myDisplayer(error);
    }
);