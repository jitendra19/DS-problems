var containsDuplicate = function (nums) {
  // // using map
  // let m = new Map();
  // for(let i in nums) {
  //     if(m.has(nums[i])) {
  //         return true;
  //     } else {
  //         m.set(nums[i], 1)
  //     }
  // }
  // return false;

  // // using subArray but time issue happen
  // for(let i=0;i<nums.length;i++) {
  //     let sub = nums.slice(i+1, nums.length)
  //     if(sub.indexOf(nums[i]) > -1) {
  //         return true;
  //     }
  // }
  // return false;

  // // using set
  // const s = new Set(nums);
  // return s.size !== nums.length;

  // // using another array but again timelimit
  // const a = [];
  // for(let i of nums) {
  //     if(a.indexOf(i) > -1) return true
  //     else a.push(i)
  // }
  // return false;

  // using sorting
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};
