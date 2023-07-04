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
  3,
  5,
  7,
  9,
  12,
  14,
  144,
  155,
  198,
  201,
  999,
  1675,
  3453,
  4563,
  32414,
  234221,
  1234561
];

BSRecur(arr, 144, arr.length, 0); // 6
BSRecur(arr, 3, arr.length, 0); // 0
BSRecur(arr, 1234561, arr.length, 0); // 16
BSRecur(arr, 123, arr.length, 0); // -1

BSRecur(arr, 999, arr.length, 0); // 10
BSRecur(arr, 32414, arr.length, 0); // 14
BSRecur(arr, 3453, arr.length, 0); // 12
BSRecur(arr, 12, arr.length, 0); // 4

export default function testAnagram() {
  console.log(anagram("loop", "pool") === true);
  console.log(anagram("loop1", "pool") === false);
  console.log(anagram("loop", "pool1") === false);
  console.log(anagram("loop", "") === false);
}
