function binarySearch(arr, val) {
    returnValue = bs(arr, 0, arr.length, val)
    return returnValue;
}

function bs(arr, low, high, val) {
    if(low >= high) return -1;
    
    mid = parseInt((low+high)/2);       
    if(arr[mid] === val) return mid;
    else if(arr[mid] > val) {
        return bs(arr,0, mid-1, val);
    } else {
        return bs(arr,mid+1, high, val)
    }
}

console.log(binarySearch([2,5,6,7,9,10, 100, 1003, 4536, 65748], 10) === 5);
console.log(binarySearch([2,5,6,7,9,10, 100, 1003, 4536, 65748], 2) === 0);
console.log(binarySearch([2,5,6,7,9,10, 100, 1003, 4536, 65748], 65748)=== 9);
console.log(binarySearch([2,5,6,7,9,10, 100, 1003, 4536, 65748], 2341) === -1);


