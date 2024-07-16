/*TODO demo  dong bo */
const start = () => {
    setTimeout(() => console.log('Starting'), 2000);
}
const doing = () => {
    setTimeout(() => console.log('Doing'), 1000);
}
const end = () => {
    console.log('Ending');
}
start();
doing();
end();
