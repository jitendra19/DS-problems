function throttling(func, t) {
    let shouldWait = false;
    return (...args) => {
        if(!shouldWait) return;
        func(args);
        shouldWait = true;
        setTimeout(() => {
            shouldWait = false;
        }, t)
    }
}
// console.log('asdfasdf')

const throttle = throttling(function() {
                    console.log("called function ---", i);
                }, 1000);

throttle();
throttle();
throttle();
throttle();

function debouncing(callback, t) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(()=> {
            callback(args);
        }, t);
    }
}
