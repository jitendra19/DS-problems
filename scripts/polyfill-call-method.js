Function.prototype.customCall = function(context, ...args) {
    context = context || window;

    const uniqueId = 'call_'+ new Date();

    context[uniqueId] = this;
    
    const result = context[uniqueId](args);
    
    delete context[uniqueId];

    return result;
}

function printMyName (abc) {
    console.log(`this is ${this.firstname} ${abc}`)
}

const person = {
    firstname : 'jitendra'
}

printMyName.call(person, 'singhal')

printMyName.customCall(person, 'singhal', 'hello ')
