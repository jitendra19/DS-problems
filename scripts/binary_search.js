function BSRecur(arr, value, high, low) {
  if (high < low) {
    console.log(-1);
    return -1;
  }
  let mid = parseInt((high + low) / 2);
  if (arr[mid] === value) {
    console.log(mid);
    return mid;
  } else if (arr[mid] > value) {
    return BSRecur(arr, value, mid - 1, 0);
  }
  return BSRecur(arr, value, high, mid + 1);
}

let arr = [
  3, 5, 7, 9, 12, 14, 144, 155, 198, 201, 999, 1675, 3453, 4563, 32414, 234221,
  1234561,
];

export default function testBSRecur() {
  console.log(BSRecur(arr, 144, arr.length, 0) === 6); // 6
  console.log(BSRecur(arr, 3, arr.length, 0) === 0); // 0
  console.log(BSRecur(arr, 1234561, arr.length, 0) === 16); // 16
  console.log(BSRecur(arr, 123, arr.length, 0) === -1); // -1

  console.log(BSRecur(arr, 999, arr.length, 0) === 10); // 10
  console.log(BSRecur(arr, 32414, arr.length, 0) === 14); // 14
  console.log(BSRecur(arr, 3453, arr.length, 0) === 12); // 12
  console.log(BSRecur(arr, 12, arr.length, 0) === 4); // 4
}
