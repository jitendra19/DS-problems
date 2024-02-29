var maxProfit = function (prices) {
  let left = 0,
    right = 1;
  let maxprofit = 0;
  let min = prices[left];
  while (left < right && right <= prices.length) {
    if (prices[right] - prices[left] < 0) {
      // if(min > prices[right]) {
      min = prices[right];
      // }
      left = right;
    } else if (prices[right] - prices[left] > maxprofit) {
      maxprofit = prices[right] - prices[left];
    }
    right++;
  }
  return maxprofit;
};

maxProfit([2, 1, 2, 1, 0, 1, 2]);
maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([7, 6, 4, 3, 1]);
