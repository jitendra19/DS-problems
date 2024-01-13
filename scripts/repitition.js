const arr = [5,3,2,5,7,9,5]

function repition(arr) {
   // map
   const obj = {};
    for(let i=0;i<arr.length;i++) {
        if(obj[arr[i]]) {
            obj[arr[i]]++;
        } else {
            obj[arr[i]] = 1;
        }
    }
    console.log(obj);
    let maxCounterIndex;
    let index;
    
    for(let i in obj) {
        if(maxCounterIndex) {
            if(maxCounterIndex < obj[i]) {
                maxCounterIndex = obj[i];
                index = i;
            }
        } else {
            maxCounterIndex = obj[i]
            index =  i;
        }
    }
    return index;
}


repition(arr);
