// function firstUniqueChar(str: string): string | null {
//   let charCount = new Map<string, number>();

//   // Counter la frequence
//   for (let char of str) {
//     charCount.set(char, (charCount.get(char) || 0) + 1); // || quer dizer que se o valor a esquerda é falso, utilisar o da direita
//   }

//   // Trouver la premiere charactere
//   for (let i = 0; i < str.length; i++) {
//     if (charCount.get(str[i]) === 1) {
//       return str[i];
//     }
//   }
//   return null;
// }

// console.log(firstUniqueChar("leetcode"));

// function containsDuplicate(nums: number[]): boolean {
//   const seen = new Set<number>();

//   for (const i of nums) {
//     if (seen.has(i)) {
//       return true;
//     }

//     seen.add(i);
//   }
//   return false;
// }

// console.log(containsDuplicate([1, 2, 3, 4, 5, 1]));

// function maxNumber(nums: number[]): number {
//   let max = nums[0];

//   for (const num of nums) {
//     if (num > max) {
//       max = num;
//     }
//   }

//   return max;
// }

// console.log(maxNumber([1, 2, 4, 5, 6]));

// function minNumber(nums: number[]): number {
//   let min = nums[0];

//   for (const num of nums) {
//     if (num < min) {
//       min = num;
//     }
//   }

//   return min;
// }

// console.log(minNumber([1, 2, 3, 4, 5, 6]));

// function sumArray(nums: number[]): number {
//   let sum = 0;

//   for (const num of nums) {
//     sum += num;
//   }

//   return sum;
// }

// console.log(sumArray([1, 2, 3, 4]));

// function countEven(nums: number[]): number {
//   let count = 0;

//   for (const num of nums) {
//     if (num % 2 === 0) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countEven([1, 2, 3, 4]));

// function firstNegativeNumber(nums: number[]): number | null {
//   for (const num of nums) {
//     if (num < 0) {
//       return num;
//     }
//   }

//   return null;
// }

// console.log(firstNegativeNumber([1, 2, 3, -4, 5, 6, -8]));

// function reverseArray(nums: number[]): number[] {
//   const reversed: number[] = [];

//   for (let i = nums.length - 1; i >= 0; i--) {
//     reversed.push(nums[i]);
//   }

//   return reversed;
// }

// console.log(reverseArray([1, 2, 3, 4]));

// function countPositiveNumbers(nums: number[]): number {
//   let count = 0;

//   for (let num of nums) {
//     if (num > 0) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countPositiveNumbers([1, 2, 3, 0, -5, 9]));

// function firstEvenNumber(nums: number[]): number | null {
//   for (let num of nums) {
//     if (num % 2 == 0) {
//       return num;
//     }
//   }

//   return null;
// }

// console.log(firstEvenNumber([2, 3, 4, 6, 7, 8, 9]));

// function lastNegativeNumber(nums: number[]): number | null {
//   let lastNegative: number | null = null;

//   for (const num of nums) {
//     if (num < 0) {
//       lastNegative = num;
//     }
//   }
//   return lastNegative;
// }

// console.log(lastNegativeNumber([1, 2, -4, -6, 9, 0]));

// function countOccurences(nums: number[], target: number): number {
//   let counter = 0;

//   for (const num of nums) {
//     if (num == target) {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(countOccurences([1, 2, 2, 3, 4, 5, 2], 2));

// function longestWord(strs: string[]): string {
//   let max = strs[0];

//   for (const str of strs) {
//     if (str.length > max.length) {
//       max = str;
//     }
//   }
//   return max;
// }

// console.log(longestWord(["pedro", "ordinateur", "Jenny"]));

// function capFirstLetter(str: string): string {
//   if (str.length == 0) {
//     return "";
//   }
//   return str[0].toUpperCase() + str.slice(1);
// }

// console.log(capFirstLetter("pedro"));

// function countWords(strs: string): number {
//   return strs.split(" ").length;
// }

// console.log(countWords("Bonjour tout le monde"));

// function secLargest(nums: number[]): number {
//   let max = -Infinity;
//   let secMax = -Infinity;

//   for (const num of nums) {
//     if (num > max) {
//       secMax = max;
//       max = num;
//     } else if (num > secMax) {
//       secMax = num;
//     }
//   }

//   return secMax;
// }

// console.log(secLargest([1, 4, 7, 10, 15]));
