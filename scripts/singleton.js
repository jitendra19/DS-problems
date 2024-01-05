singleton = (function() {
    function abc(age) {
        this.age = age || 10;
    }
    let instance;
    return {
        getInstance: function(val) {
            if(!instance) instance = new abc(val);
            return instance;
        }
    }
})()

console.log(singleton.getInstance(15))
console.log(singleton.getInstance())
console.log(singleton.getInstance(10))

const a = singleton.getInstance(15);
const b = singleton.getInstance(10);
console.log("Singleton testing --- ", a === b);
