// function reverse(n) {
//   const result = n.toString().split("");
//   return Math.abs(+result.reverse().join(""));
// }
// console.log(reverse(162), typeof reverse(162));
// function towelSort(matrix) {
//   if (!matrix || matrix.length === 0) {
//     return [];
//   }
//   let result = [];
//   result = matrix.map((item, index) =>
//     index % 2 === 0 ? item : item.reverse()
//   );
//   return result.flat(Infinity);
// }
// console.log(
//   towelSort([
//     [1, 2],
//     [3, 4],
//   ])
// );
// function toReadable(number) {
//   const arrayOfNumbers = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//   ];
//   const numberLength = (number) => number.toString().length;
//   if (numberLength === 1) {
//     return arrayOfNumbers[number];
//   } else if (numberLength === 2) {
//   }
// }
// console.log(toReadable(9));
// function accum(s) {
//   return s
//     .split("")
//     .map((item, index) => {
//       if (index === 0) {
//         return item.toUpperCase();
//       } else if (item.codePointAt(0) <= 90) {
//         // console.log(item.charAt(0));
//         return item + item.toLowerCase().repeat(index);
//       } else {
//         return item.toUpperCase() + item.repeat(index);
//       }
//     })
//     .join("-");
// }
// let s = "aZpglnRxqenU";
// console.log(accum(s));

// function highAndLow(numbers) {
//   let resultArr = numbers
//     .split(" ")
//     .map((item) => +item)
//     .sort((a, b) => a - b);
//   return `${resultArr[resultArr.length - 1]} ${resultArr[0]}`;
// }

// console.log(highAndLow("1 2 -3 4 5"));
// //highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// function calc(x) {
//   let total1 = x
//     .split("")
//     .map((item) => item.codePointAt(0))
//     .join("");
//   let total2 = total1.replace(/7/g, "1");

//   const reducer = (acc, currentValue) => +acc + +currentValue;
//   return total1.split("").reduce(reducer) - total2.split("").reduce(reducer);
//   // .split("")
//   // .map((item) => (+item === 7 ? 1 : +item))
//   // let total3 = total2.split("").reduce(reducer);
// }

// console.log(calc("ABC"));

// You will be given a string (map) featuring a cat "C" and a mouse "m". The rest of the string will be made up of dots (".") The cat can move the given number of moves up, down, left or right, but not diagonally.

// You need to find out if the cat can catch the mouse from it's current position and return "Caught!" or "Escaped!" respectively.
// moves = 5

// map =
// ..C......
// .........
// ....m....

// returns "Caught!" because the cat can catch the mouse in 4 moves

// function catMouse(map, moves) {
//   if (!map.includes("m") || !map.includes("C")) {
//     return "boring without two animals";
//   }
//   let lines = map.split("\n");
//   catLine = lines.filter((string) => {
//     return string.indexOf("C") >= 0;
//   });
//   mouseLine = lines.filter((string) => {
//     return string.indexOf("m") >= 0;
//   });
//   catPosition = +catLine.toString().indexOf("C");

//   mousePosition = +mouseLine.toString().indexOf("m");

//   let mouseLineNumber = +lines.indexOf(mouseLine.toString());
//   let catLineNumber = +lines.indexOf(catLine.toString());
//   return Math.abs(catPosition - mousePosition) +
//     Math.abs(catLineNumber - mouseLineNumber) <=
//     moves
//  ..   ? "Caught!"
//     : "Escaped!";
// }
// const ree = `..C......
// m........
// .........`;
// console.log(catMouse(ree, 6));

// const FilterString = function (value) {
//   return +value.match(/\d/g).join("");
// };
// console.log(FilterString("av1ce3sdds4"));
// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// function divCon(x) {
//   if (x.length === 0) return 0;
//   const reducer = (acc, currentValue) => +acc + +currentValue;
//   let numbersSum = x
//     .filter((item) => typeof item === "number")
//     .reduce(reducer, 0);
//   let lettersSum = x
//     .filter((item) => typeof item === "string")
//     .reduce(reducer, 0);
//   return numbersSum - lettersSum;
// }

// console.log(divCon([9, 3]));

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()())("
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// function duplicateEncode(word) {
//   let duplicate = [...word.toLowerCase().split("")];
//   return duplicate
//     .map((element) => {
//       return duplicate.indexOf(element) === duplicate.lastIndexOf(element)
// /? "("
//         : ")";
//     })
//     .join("");
// }
// console.log(duplicateEncode("recede"));

// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

// function squares(x, n) {
//   if (n <= 0) return [];
//   let result = Array(n).fill(n);
//   return result.map((item, index) => (index === 0 ? item : (item = item ** 2)));
//   //   for (i = 0; i < n; i++) {
//   //     result.push(x);
//   //     x = x ** 2;
//   //   }
//   //   return result;
// }
// console.log(squares(2, 5));
// function validPass(password) {
//   const criteria1 = /^\w{4,20}$/.test(password);
//   const criteria2 = /\d/.test(password);
//   const criteria3 = /[a-zA-Z]/.test(password);
//   return criteria1 && criteria2 && criteria3 ? "VALID" : "INVALID";
// }
// console.log(validPass("Username123"), "Username123");
// console.log(validPass("Username"), "Username");
// console.log(validPass("1Username"), "1Username");
// console.log(validPass("123"), "123");
// console.log(validPass("a12"), "a12");
// console.log(validPass("Username123!"), "Username123!");
// console.log(
//   validPass("ThisPasswordIsTooLong1234"),
//   "ThisPasswordIsTooLong1234"
//);

// You are given an array (which will have a length of at least 3, but could be very large)
//  containing integers. The array is either entirely comprised of odd integers or entirely
// comprised of even integers except for a single integer N. Write a method that takes the
// array as an argument and returns this "outlier" N.
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)
// function findOutlier(integers) {
//   let allEven = integers.filter((item) => item % 2 === 0);
//   let allOdd = integers.filter((item) => item % 2 !== 0);

// }
// let integer = [2, 4, 0, 100, 4, 11, 2602, 36];
// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));

// Create the function fridayTheThirteenths
// that accepts a start year and an end year (inclusive), and returns all of the dates where the 13th of a month lands on a Friday in the given range of year(s).

// The return value should be a string where each date is
//  seperated by a space. The date should be formatted like
//   9/13/2014 where months do not have leading zeroes and
//   are separated with forward slashes.
// If no end year is given, only return friday the thirteenths during the start year.
// function fridayTheThirteenths(start, end) {
//   let startDay = new Date(start,0,1);
// let endDay = new Date(end,0,1);
//   return [startDay,endDay];
// }
// console.log(fridayTheThirteenths(1999,2000));

/* For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
// function getCommonCharacterCount(s1, s2) {
// 	// throw new Error('Not implemented');
// 	// throw new Error('Not implemented');
// 	let s1counter = {};
// 	let s2counter = {};

// 	[...s1.split("")].forEach((element) => {
// 		s1counter[element] ? s1counter[element]++ : (s1counter[element] = 1);
// 	});
// 	[...s2.split("")].forEach((element) => {
// 		s2counter[element] ? s2counter[element]++ : (s2counter[element] = 1);
// 	});
// 	let counter = 0;
// 	let arr1 = Object.entries(s1counter);
// 	let arr2 = Object.entries(s2counter);
// 	for (let key of Object.keys(s1counter)) {
// 		if (s2counter[key]) {
// 			let quantity =
// 				s2counter[key] >= s1counter[key] ? s1counter[key] : s2counter[key];
// 			counter += quantity;
// 		}
// 	}
// 	// for (let key in s1counter) {
// 	// 	if (s2counter[key]) {
// 	// 		let quantity =
// 	// 			s2counter[key] >= s1counter[key] ? s1counter[key] : s2counter[key];
// 	// 		counter += quantity;
// 	// 	}
// 	// }
// 	return counter;
// }

// console.log(getCommonCharacterCount("aabcc", "adcaa"));
// function deleteDigit( n ) {
// 	resultArray = n.toString().split('');
// 	acc= [];
// 	res = resultArray.map((element,index,arr)=> {

// 		acc = [...arr.slice( )];
// 		return acc;
// 	})
// 	return 	res;
// }
// console.log(deleteDigit(432));
// function sortByHeight(arr) {
// 	const filtered = arr.filter(element=> element > 0);
// 	const sorted = filtered.sort((a,b) =>  a-b);
// 	const result = arr.map((element) => {
// 	return 	element === -1 ? element : sorted.shift();
// 	});

// 	return result;
// }
// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

// function encodeLine( str ) {
// let result = "";
// let count = 1;

// for (let index = 0; index < str.length; index++) {
// 	const element = str[index];
// 	let nextElement = str[index+1];
// 	if(element === nextElement) {
// 		count++;
// 		continue;
// 	}
// 	result+= element;

// 	if(count > 1) {
// 		result +=count;
// 		count = 1;
// 	}
// }
// return result;
// // }
// console.log(encodeLine('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));
// console.log(Object.keys({}).length);
// Write a function that takes an array and counts the number of each unique element present.
const findIndex = function (array, value, start = 0, end = array.length - 1) {
	if (start > end) return false;
	let mid = Math.floor((start + end) / 2);
	if (array[mid] === value) return mid;
	if (array[mid] > value) {
		return findIndex(array, value, start, mid - 1);
	} else return findIndex(array, value, mid + 1, end);
};

console.log(findIndex([1, 2, 3, 5, 6, 7, 8, 9, 10], 7));
// count(['james', 'james', 'john'])
// #=> { 'james': 2, 'john': 1}
// function count(array) {
//   counter = {};
//   array.forEach(element => {
//     counter[element]? counter[element]++ : counter[element] = 1;
//   });
//   return counter;
// }
// console.log(count(["james", "james", "john"]));
