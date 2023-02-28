let f = () => {
    let d = new Date(); // current time
    return d.getMilliseconds() % 2 == 0; // => true or false
};
const options = { max: 3 }
async function retry(func, wait = 0, options = {}) {
    const { max = null } = options;
    let retries = 1;
    while (max === null || retries <= max) {
        const result = func();
        if (result && max != null) {
            await new Promise((resolve) => setTimeout(resolve, wait));
            return true;
        }
        retries++;
    }

    await new Promise((resolve) => setTimeout(resolve, wait));
    return false;
}
retry(f, 1000, options).then((result) => {
    console.log(result);
})