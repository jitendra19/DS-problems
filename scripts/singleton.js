singleton = (function() {
    function abc(age) {
        this.age = age || 10;
    }
    let instance;
    return (val) => {
        if(!instance) instance = new abc(val);
        return instance;
    }
})();

console.log(singleton(15)) 
console.log(singleton())
console.log(singleton(10))

const a = singleton(15).age;
const b = singleton(10).age;
console.log("Singleton testing --- ",a===b);
console.log("Singleton testing --- ", a===15);
