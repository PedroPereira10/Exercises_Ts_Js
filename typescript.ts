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

// interface User {
//   id: number;
//   name: string;
//   age: number;
//   isAdmin: boolean;
// }

// const users: User[] = [
//   { id: 1, name: "Pedro", age: 25, isAdmin: true },
//   { id: 2, name: "Christian", age: 26, isAdmin: false },
//   { id: 3, name: "Jenny", age: 25, isAdmin: false },
// ];

// function getAdmin(users: User[]): User[] {
//   const admins: User[] = [];

//   for (let user of users) {
//     if (user.isAdmin === true) {
//       admins.push(user);
//     }
//   }

//   return admins;
// }

// console.log(getAdmin(users));

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// const products: Product[] = [
//   { id: 1, name: "Keyboard", price: 50 },
//   { id: 2, name: "Mouse", price: 5 },
//   { id: 3, name: "Screen", price: 10 },
//   { id: 4, name: "Laptop", price: 80 },
// ];

// Function that returns the product and its informations by id

// function getProductById(products: Product[], id: number): Product | undefined {
//   return products.find((product) => product.id === id);
// }

// Function that returns a new map with all the names of products

// function getProductInNewMap(products: Product[]): string[] | undefined {
//   return products.map((product) => product.name);
// }

// console.log(getProductInNewMap(products));

// Function that returns just the products that their price are low than 50.

// function getProductLowerThan50(products: Product[]): Product[] {
//   return products.filter((product) => product.price < 50);
// }

// console.log(getProductLowerThan50(products));

// const numbers = [2, 5, 6, 8, 11, 14, 17, 20];
// const result = numbers.filter((number) => number % 2 === 0);
// console.log(result);

// const numbers = [2, 5, 8, 11];
// const numbersMult = numbers.map((number) => number * 3);
// console.log(numbersMult);

// const prices = [10, 20, 30, 40];
// const sum = prices.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// const users = [
//   { id: 1, name: "Pedro", age: 26 },
//   { id: 2, name: "Jenny", age: 25 },
//   { id: 3, name: "Maria", age: 30 },
// ];

// const findName = users.find((user) => user.name === "Pedro");
// console.log(findName);

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// const products: Product[] = [
//   { id: 1, name: "Keyboard", price: 50 },
//   { id: 2, name: "Mouse", price: 5 },
//   { id: 3, name: "Screen", price: 10 },
//   { id: 4, name: "Laptop", price: 80 },
// ];

// function getExpensiveProducts(products: Product[]): Product[] {
//   return products.filter((product) => product.price > 50);
// }

// console.log(getExpensiveProducts(products));

// function formatId(id: number | string): string {
//   return "ID-" + id;
// }

// console.log(formatId("ABC"));

// function getLast<T>(items: T[]): T {
//   return items[items.length - 1];
// }

// console.log(getLast([1, 2, 3]));

// function printValue(value: unknown) {
//   if (typeof value === "string") {
//     console.log(value);
//   } else if (typeof value === "number") {
//     console.log(value);
//   } else {
//     console.log("The type doesn't match with the value");
//   }
// }

// printValue("Pedro");

// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// const users = [
//   { id: 1, name: "Pedro", age: 26 },
//   { id: 2, name: "Jenny", age: 25 },
//   { id: 3, name: "Maria", age: 30 },
// ];

// function fakeApiRequest(id: number): Promise<User> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = users.find((user) => user.id === id);

//       if (user) {
//         resolve(user);
//       } else {
//         reject(new Error("User not found"));
//       }
//     }, 1000);
//   });
// }

// async function getUser(id: number): Promise<User | null> {
//   try {
//     const user = await fakeApiRequest(id);
//     return user;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

// getUser(1)
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// interface User {
//   id: number;
//   name: string;
//   age: number;
//   active: boolean;
// }

// function getUserName(data: unknown): string {
//   if (typeof data === "object" && data !== null) {
//     if (
//       "id" in data &&
//       "name" in data &&
//       typeof data.id === "number" &&
//       typeof data.name === "string"
//     ) {
//       const user = users.find((user) => user.id === data.id);
//       if (user) {
//         return user.name;
//       }
//     }
//   }

//   return "Invalid user";
// }

// console.log(getUserName({ id: 2, name: "Jenny" }));

// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// const users = [
//   { id: 1, name: "Pedro", age: 26, active: true },
//   { id: 2, name: "Jenny", age: 25, active: false },
//   { id: 3, name: "Maria", age: 30, active: true },
// ];

// const response: unknown = {
//   success: true,
//   data: [
//     { id: 1, name: "Pedro", age: 26 },
//     { id: "2", name: "Jenny", age: 25 },
//   ],
// };

// function parseUsers(response: unknown): User[] {
//   if (typeof response === "object" && response !== null) {
//     if ("success" in response && response.success === true) {
//       if ("data" in response && Array.isArray(response.data)) {
//         const data = response.data;
//         const validUsers = data.every((user) => {
//           if (typeof user !== "object" || user === null) {
//             return false;
//           }
//           return (
//             typeof user.id === "number" &&
//             typeof user.name === "string" &&
//             typeof user.age === "number"
//           );
//         });
//         if (validUsers) {
//           return data;
//         }
//       }
//     }
//   }
//   return [];
// }

// // console.log(parseUsers({ id: 1, name: "Pedro" }));
// console.log(parseUsers(response));

// function processUser(name: string, callback: (name: string) => void): void {
//   setTimeout(() => {
//     callback(name);
//   }, 1000);
// }

// processUser("Pedro", (name) => {
//   console.log("Hello", name);
// });

// processUser("Jenny", (name) => {
//   console.log("Hello", name);
// });

// function fetchUser(id: number, callback: (name: string) => void): void {
//   setTimeout(() => {
//     const users = [
//       { id: 1, name: "Pedro" },
//       { id: 2, name: "Jenny" },
//     ];

//     const user = users.find((user) => user.id === id);

//     if (user) {
//       callback(user.name);
//     }
//   }, 1000);
// }

// fetchUser(1, (name) => {
//   console.log("User found", name);
// });

// interface User {
//   id: number;
//   name: string;
// }

// const users = [
//   { id: 1, name: "Pedro" },
//   { id: 2, name: "Jenny" },
// ];

// async function fetchUserData(id: number): Promise<User | null> {
//   const user = users.find((user) => user.id === id);

//   if (!user) {
//     // throw new Error("User not found");
//     return null;
//   }

//   return user;
// }

// fetchUserData(99)
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// async function fetchUserData(id: number): Promise<User | null> {
//   const user = users.find((user) => user.id === id);

//   if (!user) {
//     return null;
//   }

//   return user;
// }

// async function main() {
//   const user = await fetchUserData(1);

//   if (user === null) {
//     console.log("User not found");
//   } else {
//     console.log("User found :", user);
//   }
// }

// main();

// -------------------------------------------------------------------------------------------------------------------------------------------

// Fake Api avec throw Error, .then and .catch

interface User {
  id: number;
  name: string;
  age: number;
}

const users = [
  { id: 1, name: "Pedro", age: 26 },
  { id: 2, name: "Jenny", age: 20 },
  { id: 3, name: "Christian", age: 25 },
  { id: 4, name: "Alikhan", age: 22 },
  { id: 5, name: "Michael", age: 30 },
];

// async function fakeApi(id: number): Promise<User> {
//   const user = users.find((user) => user.id === id);

//   if (!user) {
//     throw new Error("User not found");
//   }

//   return user;
// }

// fakeApi(2)
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Fake Api qui Écris main() qui :
// utilise await;
// utilise try/catch;
// cherche id = 2;
// affiche Welcome Jenny si l'utilisateur existe;
// affiche Failed to load user s'il y a une erreur.

// async function fakeApi(id: number): Promise<User> {
//   const user = users.find((user) => user.id === id);

//   if (!user) {
//     throw new Error("User not found");
//   }

//   return user;
// }

// async function getAge(id: number): Promise<number> {
//   const user = await fakeApi(id);
//   return user.age;
// }

// async function main() {
//   try {
//     const user = await fakeApi(5);

//     console.log("Welcome", user.name);
//     console.log("Age", user.age);
//   } catch (error) {
//     console.log("Failed to load user");
//   }
// }

// main();

async function fakeApi(id: number): Promise<User> {
  const user = users.find((user) => user.id === id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

async function getName(id: number): Promise<string> {
  const user = await fakeApi(id);
  return user.name;
}

async function main() {
  try {
    const name = await getName(5);

    console.log("Welcome", name);
  } catch (error) {
    console.log("Failed to load user");
  }
}

main();
