// Question 1 – Premier caractère unique

// function firstUniqueChar(str) {
//   const charCount = new Map();

//   // Counting the frequency of the characters
//   for (let char of str) {
//     charCount.set(char, (charCount.get(char) || 0) + 1);
//   }

//   // Find the first character with count of charCount
//   for (let i = 0; i < str.length; i++) {
//     if (charCount.get(str[i]) === 1) {
//       return str[i];
//     }
//   }
//   return -1;
// }

// console.log(firstUniqueChar("leetcode"));

// Question 2 – Deux sommes

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
