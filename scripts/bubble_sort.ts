function bubble_sorting(arr) {
    for(let i =0;i<arr.length-1;i++) {
        // console.log("last element settled")
        let swapped = false;
        for(let j=0;j<arr.length-1-i;j++) {
            if(arr[j] > arr[j+1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if(!swapped) break;
        // console.log(arr)
        return arr;
    }
}

bubble_sorting([2,3,2,1,5]);