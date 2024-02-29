var twoSum = function (nums, target) {
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

  // const mapping = new Map();
  // for(let i=0;i<nums.length;i++) {
  //     const c = target - nums[i];
  //     if(mapping.has(c)) {
  //         return [mapping.get(c), i]
  //     }
  //     mapping.set(nums[i], i);
  // }
  // return [];

  const mapping = {};
  for (let i in nums) {
    mapping[nums[i]] = i;
  }
  for (let i in nums) {
    const c = target - nums[i];
    if (mapping[c] && mapping[c] !== i) {
      return [i, mapping[c]];
    }
  }
  return [];
};
