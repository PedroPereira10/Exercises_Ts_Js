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

// function moveZeros(nums: number[]): number[] {
//   const result: number[] = [];
//   let zeroCount = 0;

//   for (const num of nums) {
//     if (num === 0) {
//       zeroCount++;
//     } else {
//       result.push(num);
//     }
//   }
//   for (let i = 0; i < zeroCount; i++) {
//     result.push(0);
//   }

//   return result;
// }

// console.log(moveZeros([1, 0, 9, 8, 7, 0, 4, 5, 6]));

// function validParentheses(s: string): boolean {
//   const stack: string[] = [];

//   for (const char of s) {
//     if (char === "(" || char === "[" || char === "{") {
//       stack.push(char);
//     } else {
//       if (stack.length === 0) {
//         return false;
//       }

//       const last = stack.pop();

//       if (
//         (char === ")" && last !== "(") ||
//         (char === "]" && last !== "[") ||
//         (char === "}" && last !== "{")
//       ) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// }

// console.log(validParentheses("()"));

// function reverseString(strs: string): string {
//   let reversed = "";

//   for (let str = strs.length - 1; str >= 0; str--) {
//     reversed += strs[str];
//   }

//   return reversed;
// }

// console.log(reverseString("Pedro"));

// function findIndex(nums: number[], target: number): number {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return i;
//     }
//   }

//   return -1;
// }

// console.log(findIndex([1, 2, 5, 6, 8, 9, 4], 8));

// function coutingVowels(strs: string): number {
//   let counter = 0;
//   let vowels = "aieou";

//   for (let i = 0; i < strs.length; i++) {
//     if (vowels.includes(strs[i].toLowerCase())) {
//       counter++;
//     }
//   }

//   return counter;
// }

// console.log(coutingVowels("Pedro"));

// function largestOddNumber(nums: number[]): number | null {
//   let largest: number | null = null;

//   for (const num of nums) {
//     if (num % 2 !== 0 && (largest === null || num > largest)) {
//       largest = num;
//     }
//   }
//   return largest;
// }

// console.log(largestOddNumber([2, 7, 4, 9, 6]));

// function countUpperCase(strs: string): number {
//   let counter = 0;

//   for (let str of strs) {
//     if (str === str.toUpperCase()) {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(countUpperCase("PeReiRA"));

// function characterFrequency(strs: string): Map<string, number> {
//   let seen = new Map<string, number>();

//   for (let char of strs) {
//     seen.set(char, (seen.get(char) || 0) + 1); // || quer dizer que se o valor a esquerda é falso, utilisar o da direita
//   }
//   return seen;
// }

// console.log(characterFrequency("paralelepipedo"));

// function debounce(fn: Function, delay: number) {
//   let timer: ReturnType<typeof setTimeout>;

//   return function () {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn();
//     }, delay);
//   };
// }

// const search = debounce(() => {
//   console.log("Searching...");
// }, 500);

// search();
// search();
// search();

// function TypeBase(str: string, num: number): string {
//   return `Hello my name is ${str} and i'm ${num} years old`;
// }

// console.log(TypeBase("Pedro", 26));

// interface User {
//   id: number;
//   name: string;
//   email?: string;
//   isAdmin: boolean;
// }

// const user: User = {
//   id: 1,
//   name: "Pedro",
//   email: "a.pedropereira@hotmail.com",
//   isAdmin: true,
// };

// console.log(user);

// function sumArray(nums: number[]): number {
//   let sum = 0;
//   for (let num of nums) {
//     sum += num;
//   }

//   return sum;
// }

// console.log(sumArray([10, 20, 30, 40, 50, 60]));

interface User {
  id: number;
  name: string;
  age: number;
  isAdmin: boolean;
}

const users: User[] = [
  { id: 1, name: "Pedro", age: 25, isAdmin: true },
  { id: 2, name: "Christian", age: 26, isAdmin: false },
  { id: 3, name: "Jenny", age: 25, isAdmin: false },
];

function getAdmin(users: User[]): User[] {
  const admins: User[] = [];

  for (let user of users) {
    if (user.isAdmin === true) {
      admins.push(user);
    }
  }

  return admins;
}

console.log(getAdmin(users));
