var twoSum = function (nums, target) {
  // // Brute Force
  // let sum = [];
  // for(let i =0;i<nums.length;i++) {
  //     for(let j=i+1; j<nums.length;j++) {
  //         // console.log(`value of i, ${i} - value of j, ${j}`);
  //         if(target === nums[i] + nums[j]) {
  //             sum = [i, j];
  //             break;
  //         }
  //     }
  // }
  // return sum;

  // // with Map
  // const mapping = new Map();
  // for(let i=0;i<nums.length;i++) {
  //     const c = target - nums[i];
  //     if(mapping.has(c)) {
  //         return [mapping.get(c), i]
  //     }
  //     mapping.set(nums[i], i);
  // }
  // return [];

  // // with extra object
  // const mapping = {};
  // for (let i in nums) {
  //   mapping[nums[i]] = i;
  // }
  // for (let i in nums) {
  //   const c = target - nums[i];
  //   if (mapping[c] && mapping[c] !== i) {
  //     return [i, mapping[c]];
  //   }
  // }
  // return [];

  // without object
  for (let i in a) {
    let c = t - a[i];
    if (a.indexOf(c) > -1 && a.indexOf(c) != i) {
      return [a[i], c];
    }
  }
  return [];
};
