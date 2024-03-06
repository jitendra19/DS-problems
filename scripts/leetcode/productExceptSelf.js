/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // brute force
  // const answer = [];
  // for(let i = 0;i<nums.length;i++) {
  //     let cal = 1;
  //     for(let j = 0;j< nums.length;j++) {
  //         if(j != i) {
  //             cal = cal * nums[j];
  //         }
  //     }
  //     answer.push(cal)
  // }
  // return answer;

  let res = new Array(nums.length);
  let cur = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = cur;
    cur *= nums[i];
  }
  cur = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= cur;
    cur *= nums[i];
  }
  return res;
};

productExceptSelf(1, 2, 3, 4);
