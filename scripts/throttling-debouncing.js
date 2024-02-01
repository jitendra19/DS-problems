function throttling(func, t) {
    let shouldWait = false;
    return (...args) => {
        if(!shouldWait) {
            func(args);
            shouldWait = true;
            setTimeout(() => {
                shouldWait = false;
            }, t)
        };
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

window.addEventListener("scroll", throttle);
setTimeout( ()=> {
    window.removeEventListener("scroll", throttle);
}, 5000);
# ------------------------- -------------------------------
function debounce(func, time) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(()=> {
            func(...args);
        }, time)
    }
}

ab = debounce((i)=> {
        console.log('I am called using debounce- '+ i)
    }, 1000)


window.addEventListener("scroll", ab);

setTimeout( () => {
    window.removeEventListener('scroll', ab);
}, 20000)
