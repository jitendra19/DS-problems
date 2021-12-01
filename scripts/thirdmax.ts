var a = [3, 5, 7, 2, 4, 1, 8, 6, 9];
// 1mn => 3 variables => n
// max, secondMax, thirdMax
export function thirdMax(a) {
  let max = a[0],
    secondMax,
    thirdMax;
  for (let i = 1; i < a.length; i++) {
    if (a[i] > max) {
      thirdMax = secondMax;
      secondMax = max;
      max = a[i];
    } else if (a[i] > secondMax) {
      thirdMax = secondMax;
      secondMax = a[i];
    } else if (a[i] > thirdMax) {
      thirdMax = a[i];
    }
  }
  // console.log(thirdMax);
  return thirdMax;
}

export default function testThirdMax() {
  return thirdMax(a) === 7;
}
