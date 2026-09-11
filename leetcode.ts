// function removeDuplicates(nums: number[]): number {
//   if (nums.length === 0) {
//     return 0;
//   }

//   let k = 1;

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   return k;
// }

function reverse(x: number): number {
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  const reversedStr = Math.abs(x).toString().split("").reverse().join("");
  const reversedNum = parseInt(reversedStr) * Math.sign(x);

  if (reversedNum < INT_MIN || reversedNum > INT_MAX) {
    return 0;
  }

  return reversedNum;
}

console.log(reverse(345));
