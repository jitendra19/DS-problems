// sum function

// sum(3)()()(3) = 6

// function sum(a) {
//     return function(b) {
//         return function(c) {
//             return function(d) {
//                 return a+d;
//             }
//         }
//     }
// }

function sumR(a) {
    return (b) => {
        // a+b;
        if(!b) return a;
        a = a+b;
       return sumR(a);
    }
}
sum(3)(3)(3)(); // 9
