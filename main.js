// Homework 2 - Part 1

/* 1. function exercises */

/* function oddOrEven(num) {
  if(num%2===0) {
    return "even"
  } else {
    return "odd"
  }
}
console.log(oddOrEven(28));
 */

/* function max(a,b) {
   if(a>b) {
    return a;
  } else {
    return b;
  }
 }
 console.log(max(58,474)); */

/* function areaOfRectangle(width,height) {
   return (`Area = ${width * height}`)
 }
 
 console.log(areaOfRectangle(4,6)); */

/* 2. Main exsercise set */

/* function guessNum(min,max) {
  const winnerNum = min + Math.floor(Math.random() * (max-min));
  let userNum;
  while(winnerNum !== userNum) {
    userInput = prompt("Guess the num 1-100");
    if(userInput === null) {
      break;
    }
    userNum = +userInput;
    if(winnerNum === userNum) {
      alert("You Win!!!");
      return;
    }
    if(winnerNum>userNum) {
      alert("Too low")
    } else {
      alert("Too high")
    }
  }
}

console.log(guessNum(1,100)); */

/* function calc(base,exponent) {
let result=1;
  for(let i = 1; i<=exponent; i++) {
    result *= base
  }
    return result
  
}

console.log(calc(5,3)); */

/* function isLeapYear(year) {
  if(year%4 === 0 && year%100 !== 0 || year%400 === 0) {
    return true;
  }
  return false;
}

console.log(isLeapYear(2400)); */

/* function calc(a,b,sign) {
  switch(sign) {
    case "+": return a+b; 
    case "-": return a-b;
    case "*": return a*b;
    case "/": return a/b;
    
  }
}
console.log(calc(10,5,"+")); */

// function getPrimeSum(num) {
//   let sum = 0;
//   for(let i = 2; i <= num; i++) {
//     if(isPrime(i)) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// function isPrime(num) {
//   for(let i = 2; i <= Math.sqrt(num); i++) {
//     if(num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(getPrimeSum(2));

// let n = 5;
// let string = "";
// for(let i = 1; i<=n; i++) {
//   for(let j = n; j>=1; j--) {
//     if(i>=j) {
//       string += "* ";
//     } else {
//       string += " ";
//     }
//   }
//   string += "\n";
// }
// console.log(string);

// Homework2 Part 2

// function oddOrEven(num) {
// num = +prompt("enter number");

//   if(num%2===0) {
//     return "even"
//   } else {
//     return "odd"
//   }
// }
// console.log(oddOrEven(11));

// function maxOfThree(a,b,c) {
//   if(a>b && a>c) {
//     return a;
//   } else if(b>a && b>c) {
//     return b;
//   } else if(c>a && c>b) {
//     return c
//   }
// }

// console.log(maxOfThree(40,25,57));

/* let season = prompt("Enter the season");
if(season==="winter") {
alert("Take warm clothes");
} else if(season==="spring") {
alert("Trees are blossoming");
} else if(season==="summer") {
alert("You can go to the beach")
} else if(season==="autumn") {
alert("There are many colors outside")
} else {
alert("Sorry, season does not exist")
} */

// for(let i = 1; i<=20; i++) {
//   if(i%3===0 && i%5===0) {
//     console.log("FizzBuzz")
//   } else if(i%5===0) {
//     console.log("Buzz");
//   } else if(i%3===0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

// let grade="";
// let marks=60;
// switch(true) {
//   case (marks>90 || marks===90): grade = "A+"; break;
//   case (marks>80 || marks===80): grade = "A"; break;
//   case (marks>70 || marks===70): grade = "B"; break;
//   case (marks>60 || marks===60): grade = "C"; break;
//   case (marks>50 || marks===50): grade = "D"; break;
//   default: grade = "F"; break;
// }
// console.log(grade);

// let i = 1;
// while (i <= 20) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// let string = "";
// function bajanarar(num) {
//   for(let i = 2; i<num; i++) {
//     if(num%i===0) {
//       string += `${i},`;
//     }
//   }
//   return string;
// }

// console.log(bajanarar(10));

// let sum = 0;
// function gumar(num) {
//   for(let i = num-1; i>=1; i--) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(gumar(7));

// let i = 1;
// let mult = 1;
// do {
//   console.log(`7*${i} = ${7*i}`);
//   i++;
// } while(i<=10)

// function guessNum(winnerNum = 777) {
//   let userInput;
//   while(winnerNum !== userInput) {
//     userInput = prompt('Guess the num');
//     if(userInput === null) {
//       return;
//     }
//     const userNum = Number(userInput);
//     if(winnerNum === userNum) {
//       alert("You Win!!!");
//       return;
//     }
//     alert("Again");
//   }
// }
// console.log(guessNum());

// let char = "eabcskyoldurber";
// const words = {
//   0: 'ask',
//   1: 'older',
//   2: 'access',
//   3: 'your',
//   4: 'back',
//   5: 'car',
//   6: 'desk',
//   7: 'bench',
//   8: 'session',
//   9: 'lord',
//   10: 'blueberry',
// }

// function getMax(arr) {
//   let max=arr[0];
//   for(let i = 1; i<arr.length;i++) {
//     if(arr[i]>max) {
//       max=arr[i];
//     }
//   }
//   return max;
// }

// function middleSum(arr) {
//   let total = 0;
//   for(let i=0; i<arr.length; i++) {
//     total += arr[i];
//   }

//   return total/length
// }

// function getTypes(arr) {
//     const types = [];
//     for(let i=0; i<arr.length; i++) {
//         types.push(typeof arr[i]);
//     }

//   }

// function boost() {
//   boost.count = (boost.count || 0) + 1;
//   return 1;
// }

// boost();

// function isNameInArray(userName) {
//   let userExist = false;
//   for (let i = 0; i < userNames.length; i++) {
//     if (userNames[i] === userName) {
//       userExist = true;
//       break;
//     }
//   }
// };

// let userNames = ["Ani", "Tigran", "Aram"];

// let userName = prompt("enter name");
// if (userName) {
//   if (!isNameInArray(userName)) {
//     userNames.push(userName);
//   }
// }

// console.log(userNames);

// function isNameInArray(userName) {
//   let userExists = false;
//   for(let i = 0; i < userNames.length; i++) {
//       if(userNames[i] === userName) {
//           userExists = true;
//           break;
//       }
//   };
//   return userExists;
// }

// let userNames = ['Ani', 'Tigran', 'Aram'];

// let userName = prompt('Input your name');

// if(userName) {

//   if(!isNameInArray(userName)) {
//       userNames.push(userName);
//   }
// }

// console.log(userNames);

// let array = [1, 2, 3, 4, 5, 12, 34, 456, 78, 990];
// let arr = [];

// function even(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       arr.push(array[i]);
//     }
//   }
//   return arr;
// }
// console.log(even(array));

// let users = ["Ani", "Aram", "Tigran"];
// let arr = [];
// function newArr(array) {
//   for (let i = 0; i < array.length; i++) {
//     let obj = {};
//     obj.name = array[i];
//     arr.push(obj);
//   }

//   return arr;
// }

// console.log(newArr(users));

// let array1 = [1,2,3,4,5];
// let arr = [];
// function reverse(array) {
//   for(let i = array.length-1; i>=0; i--) {
//     arr.push(array[i]);
//   }
//   return arr;
// }

// console.log(reverse(array1));

// let arr1 = ['a','b','c','d'];
// function join(arr) {
//   let str = '';
//   for(let i = 0; i<arr.length; i++) {
//     str += arr[i];
//   }
//   return str;
// }

// console.log(join(arr1));

// function join(arr,str) {
//   let string = '';
//   for(let i = 0; i<arr.length; i++) {
//     string += arr[i]+str;

//   }

//     return string;
// }

// console.log(join(['a','a','a','a'], '|'));

// function multiply(a,b) {
//   return a*b;
// }

// console.log(multiply(5,4));

// function greet(name) {
//   return (`Hello ${name}`);
// }

// console.log(greet("Ann"));

// function calculateArea(length,width) {
//   return length * width;
// }

// console.log(calculateArea(5,7));

// function isEven(number) {
//   if(number%2===0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isEven(33));

// function getFullName(firstname,lastName) {
//   return (`${firstname} ${lastName}`)
// }

// console.log(getFullName("Gohar", "Sargsyan"));

// function getMax(arr) {
//   let max = arr[0];
//   for(let i = 1; i<arr.length; i++) {
//     if(arr[i]>max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(getMax([5,12,7,33,4,99,54,74]));

// function isPalindrom(string) {
//   let length = string.length;
//   for (let i = 0; i < length / 2; i++) {
//     if (string[i] !== string[length - 1 - i]) {
//       return "not palindrom";
//     }
//   }
//   return "is palindrom";
// }

// console.log(isPalindrom("madm"));

// function calculateAverage(arr) {
//   let total = 0;
//   for(let i = 0; i<arr.length; i++) {
//     average += arr[i];
//   }
//    return total/arr.length;
// }

// console.log(calculateAverage([1,2,3,4,5,6,7]));

// function getFactorial(num) {
//   let mult = 1;
//   for(let i = num; i>=1; i--) {
//     mult *= i;
//   }
//   return mult;
// }

// console.log(getFactorial(3));

// function convertTemperature(celsius) {
//   return (`${celsius} Celsius = ${(celsius*9/5)+32} fahrenheit`)
// }

// console.log(convertTemperature(36));

// let person = {};
// person.name = "John";
// person.age = 25;
// console.log(person.name);
// person.age = 30;

// function getAge(obj) {
//   return obj.age;
// }
// console.log(getAge(person));

// function changeName(obj,newName) {
//   obj.name = newName;
//   return obj;
// }

// console.log(changeName(person,"Harry"));

// function addProperty(obj,property,value) {
//   obj[property] = value;
//   return obj;
// }

// console.log(addProperty(person,"isArmenian",true));

// function removeProperty(obj, property) {
//   delete obj[property];
//   return obj;
// }
// console.log(removeProperty(person,"age"));

// let car = {
//   brand: "Ferrari",
//   model: "AS5"
// }

// function getCarDetails(obj) {
//   let string = "";
//   for(let key in obj) {
//     string += obj[key];
//   }
//   return string;
// }

// console.log(getCarDetails(car));

// function getTotal(arr) {
//   let total = 0;
//   for(let i = 0; i<arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }

// console.log(getTotal([1,2,3,4,5,6]));

// function getAverage(arr) {
//   let total = 0;
//   for(let i = 0; i<arr.length; i++) {
//     total += arr[i];
//   }
//   return total/arr.length;
// }

// console.log(getAverage([1,2,3,4,5,6]));

// function getLargest(arr) {
//   let max = arr[0];
//   for(let i = 1; i<arr.length; i++) {
//     if(arr[i]>max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log(getLargest([5,12,7,33,4,99,54,74]));

// function reverseArray(arr) {
//   let reversedArray = [];
//   for(let i = arr.length-1; i>=0; i--) {
//     reversedArray.push(arr[i]);
//   }
//   return reversedArray;
// }

// console.log(reverseArray([1,2,3,4,5,6,7]));

// function mergeArrays(arr1,arr2) {
//   let arr3 = arr1.length>=arr2.length ? arr1 : arr2;
//   if(arr3===arr1) {
//     for(let i = 0; i<arr2.length; i++) {
//       arr3.push(arr2[i]);
//     }

//   }
//   if(arr3===arr2) {
//     for(let i = 0; i<arr1.length;i++) {
//       arr3.push(arr1[i]);
//     }
//   }
//   return arr3;
// }

// console.log(mergeArrays([4,5,6,7,8,9],[2,2]));

// function getFullName(obj) {
//   return `${obj.firstName} ${obj.lastName}`;
// }

// console.log(
//   getFullName(
//     ({
//       firstName: "John",
//       lastName: "Smith",
//     })
//   )
// );

// function multiplyByTwo(arr) {
//   let arr1 = [];
//   for(let i = 0; i<arr.length; i++) {
//     arr1.push(arr[i]*2);
//   }
//   return arr1;
// }

// console.log(multiplyByTwo([1,2,3,4,5,6]));

// let users = [{name:"Sam"},{name:"Ara"}];
// let balances = [1000,2000];

// function modifyArray(mainArr,subArr) {
//   for(let i = 0; i<mainArr.length; i++) {
//     mainArr[i].balance = subArr[i]
//     }
//     return mainArr;
//   }

// console.log(modifyArray(users,balances));

// let users = [
//   { name: "A", team: "1" },
//   { name: "B", team: "2" },
//   { name: "C", team: "3" },
//   { name: "CC", team: "4" },
//   { name: "D", team: "1" },
//   { name: "DC", team: "2" },
//   { name: "DD", team: "3" },
//   { name: "FD", team: "4" },
// ];

// function groupTeam(arr) {
//   let groups = {};
//   for (let index = 0; index < arr.length; index++) {
//     if (!groups[arr[index].team]) {
//       groups[arr[index].team] = [];
//       groups[arr[index].team].push(arr[index]);
//     }
//     groups[arr[index].team].push(arr[index]);
//   }
//   return groups;
// }

// console.log(groupTeam(users));

// function isPalindrom(number) {
//   let original = number;
//   let reversed = 0;
//   while (number) {
//     let lastDigit = number % 10;
//     reversed = reversed * 10 + lastDigit;
//     number = Math.floor(number / 10);
//   }
//   return original === reversed;
// }

// console.log(isPalindrom(232));

// function sumMembers(number) {
//   let sum = 0;
//   while (number) {
//     let lastDigit = number % 10;
//     number = Math.floor(number / 10);
//     sum += lastDigit;
//   }
//   return sum;
// }

// console.log(sumMembers(232));

// function getAverage(arr) {
//   const skipValues = ["", null, undefined, false, true];
//   let sum = 0;
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (!isNaN(Number(arr[i])) && !skipValues.includes(arr[i])) {
//       sum += Number(arr[i]);
//       count++;
//     }
//   }
//   return sum / count;
// }

// console.log(getAverage([1, null, "", false, 3]));

// const persons = [
//   {
//     id: 1,
//     name: "Eduard",
//     age: 25,
//     friends: [2, 4, 7, 9],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//   },
//   {
//     id: 2,
//     name: "Karine",
//     age: 25,
//     friends: [1, 3, 4, 7, 9],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//   },
//   {
//     id: 3,
//     name: "Jon",
//     age: 25,
//     friends: [1, 2, 4, 7, 9],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//   },
//   {
//     id: 4,
//     name: "Bek",
//     age: 25,
//     friends: [2, 3, 7, 9],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//   },
//   {
//     id: 5,
//     name: "Abgar",
//     age: 25,
//     friends: [2, 4, 7, 9],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//   },
//   {
//     id: 6,
//     name: "Narek",
//     age: 25,
//     friends: [2, 4, 5, 7, 9],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//   },
//   {
//     id: 7,
//     name: "David",
//     age: 25,
//     friends: [2, 4, 5, 6, 9],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//   },
//   {
//     id: 8,
//     name: "Eduard",
//     age: 25,
//     friends: [2],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//   },
//   {
//     id: 9,
//     name: "Laura",
//     age: 25,
//     friends: [1, 6],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//   },
//   {
//     id: 10,
//     name: "Gexaznik",
//     age: 25,
//     friends: [4, 5, 7, 9],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//   },
//   {
//     id: 11,
//     name: "Eduard",
//     age: 25,
//     friends: [1, 3, 4, 7, 9, 10],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//   },
//   {
//     id: 12,
//     name: "Eduard",
//     age: 25,
//     friends: [1, 2, 4, 7, 9, 11],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//   },
// ];

// function makePost(id, str) {
//   for (let i = 0; i < persons.length; i++) {
//     if (persons[i].id === id) {
//       persons[i].posts.push(str);
//       const friends = persons[i].friends;
//       for (let j = 0; j < friends.length; j++) {
//         for (let i = 0; i < persons.length; i++) {
//           if (friends[j] === persons[i].id) {
//             persons[i].notifications.push(`New massage from ${persons[i].name}`);
//           }
//         }
//       }
//     }
//   }
//   return persons;
// }

// console.log(makePost(12, "Hi"));

// function getUserById(id) {
//   for (let i = 0; i < persons.length; i++) {
//     if (persons[i].id === id) {
//       user = persons[i];
//     }
//   }
//   return user;
// }

// function addFriend(id1, id2) {
//   let user1 = getUserById(id1);
//   let user2 = getUserById(id2);
//   user2.requests.push(`${user1.name} want to add u to friends list`);
//   return persons;
// }

// console.log(addFriend(5, 10));

// function getFriends(id) {
//   for(let i = 0; i< persons.length;i++) {
//     if(persons[i].id===id) {
//       return persons[i].friends;
//     }
//   }
// }

// console.log(getFriends(7));

// function sentMassage(id, str) {
//   for (let i = 0; i < persons.length; i++) {
//     if (persons[i].id === id) {
//       persons[i].massage.push(str);
//     }
//   }
//   return persons;
// }
// console.log(sentMassage(4, "Hello"));

// function search(text) {
//   let arr = [];
//   for (let i = 0; i < persons.length; i++) {
//     if (persons[i].name.includes(text)) {
//       arr.push(persons[i].name);
//     }
//   }
//   return arr;
// }

// console.log(search("d"));

// let users = [
//   { name: "Armen", score: 10 },
//   { name: "Ani", score: 20 },
//   { name: "Sevak", score: 30 },
// ];

// function newArr(array) {
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//     let obj = {};
//     obj[array[i].name] = array[i].score;
//     arr.push(obj);
//   }
//   return arr;
// }

// console.log(newArr(users));

// let array = [1, 2, 3, 4, 5, 6];

// function makeString(arr) {
//   let string = "";
//   for (let i = 0; i < arr.length; i++) {
//     string += arr[i]
//   }
//   return string;
// }

// console.log(makeString(array));

// let arr = ["Ann", "John", "Sam"];

// function modifyArr(arr) {
//   let resultArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let obj = {};
//     obj.name = arr[i];
//     resultArr.push(obj);
//   }
//   return resultArr;
// }

// console.log(modifyArr(arr));

// let str = 'I love my Mom';

// function makeArr(str) {
//   let arr = [];
//   for(let i = 0; i<str.length; i++) {
//     if(str[i] !== " ") {
//       arr.push(str[i]);
//     }
//   }
//   return arr;
// }

// console.log(makeArr(str));

// let arr = [12, 3, 5, 24,7];
// function primeIndex(arr) {
//   let primeArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (isPrime(arr[i])) {
//       primeArr.push(arr[i]);
//     }
//   }
//   return primeArr;
// }

// console.log(primeIndex(arr));

// function isPrime(num) {
//   if(num===1) return false;
//   for (let i = 2; i <= num / 2; i++) {
//     if (num === 2 || num === 3) return true;
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function getFactorial(num) {
//   let mult = 1;
//   for(let i = num; i>=1; i-- ) {
//     mult *= i;
//   }
//   return mult;
// }

// console.log(getFactorial(5));

// function filter(arr, checkCallBack = () => {}) {
//   let array = [];
//   for (let i = 0; i < arr.length; i++) {
//     if(checkCallBack(arr[i])) {
//       array.push(arr[i]);

//     }
//   }
//   return array;
// }

// console.log(filter([2,4,5,7,9],isPrime));

// let calc = {
//   sum: (a, b) => a + b,
//   minus: (a, b) => a - b,
//   mult: (a, b) => a * b,
//   div: (a, b) => a / b,
// };

// console.log(calc.mult(2,3));

// function getCount(obj) {
//   let count = 0;
//   for (let key in obj) {
//     count++;
//   }
//   return count;
// }

// console.log(getCount(calc));

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// const bankUsers = [
//   {
//     id: 1,
//     firstName: "User1",
//     lastName: "LastName1",
//     phoneNumber: "+1234567810",
//     mainCardAccountNumber: "1234 5678 9012 9297",
//     mainCardAccountBalance: 71392,
//     mainSavingsAccountNumber: "9876 5432 1098 6350",
//     mainSavingsAccountBalance: 11558,
//     euroAccountNumber: "1111 2222 3333 5514",
//     euroAccountBalance: 73151,
//     dollarAccountNumber: "5555 6666 7777 5474",
//     dollarAccountBalance: 72453,
//     rubleAccountNumber: "9999 0000 1111 1076",
//     rubleAccountBalance: 0,
//   },
//   {
//     id: 2,
//     firstName: "User2",
//     lastName: "LastName2",
//     phoneNumber: "+1234567811",
//     mainCardAccountNumber: "1234 5678 9012 2079",
//     mainCardAccountBalance: 71695,
//     mainSavingsAccountNumber: "9876 5432 1098 6975",
//     mainSavingsAccountBalance: 82447,
//     euroAccountNumber: "1111 2222 3333 9937",
//     euroAccountBalance: 42398,
//     dollarAccountNumber: "5555 6666 7777 5732",
//     dollarAccountBalance: 26847,
//     rubleAccountNumber: "9999 0000 1111 2998",
//     rubleAccountBalance: 19564,
//   },
//   {
//     id: 3,
//     firstName: "User3",
//     lastName: "LastName3",
//     phoneNumber: "+1234567812",
//     mainCardAccountNumber: "1234 5678 9012 9435",
//     mainCardAccountBalance: 87642,
//     mainSavingsAccountNumber: "9876 5432 1098 3652",
//     mainSavingsAccountBalance: 9259,
//     euroAccountNumber: "1111 2222 3333 6353",
//     euroAccountBalance: 13928,
//     dollarAccountNumber: "5555 6666 7777 5255",
//     dollarAccountBalance: 86561,
//     rubleAccountNumber: "9999 0000 1111 8469",
//     rubleAccountBalance: 60239,
//   },
//   {
//     id: 4,
//     firstName: "User4",
//     lastName: "LastName4",
//     phoneNumber: "+1234567813",
//     mainCardAccountNumber: "1234 5678 9012 1748",
//     mainCardAccountBalance: 101050,
//     mainSavingsAccountNumber: "9876 5432 1098 3466",
//     mainSavingsAccountBalance: 102533,
//     euroAccountNumber: "1111 2222 3333 4672",
//     euroAccountBalance: 75532,
//     dollarAccountNumber: "5555 6666 7777 9497",
//     dollarAccountBalance: 103404,
//   },
//   {
//     id: 5,
//     firstName: "User5",
//     lastName: "LastName5",
//     phoneNumber: "+1234567814",
//     mainCardAccountNumber: "1234 5678 9012 1302",
//     mainCardAccountBalance: 95939,
//     mainSavingsAccountNumber: "9876 5432 1098 3179",
//     mainSavingsAccountBalance: 52291,
//     euroAccountNumber: "1111 2222 3333 9028",
//     euroAccountBalance: 75606,
//     rubleAccountNumber: "9999 0000 1111 9171",
//     rubleAccountBalance: 63981,
//   },
//   {
//     id: 6,
//     firstName: "User6",
//     lastName: "LastName6",
//     phoneNumber: "+1234567815",
//     mainCardAccountNumber: "1234 5678 9012 3398",
//     mainCardAccountBalance: 53820,
//     mainSavingsAccountNumber: "9876 5432 1098 4482",
//     mainSavingsAccountBalance: 19156,
//     euroAccountNumber: "1111 2222 3333 1233",
//     euroAccountBalance: 85853,
//     dollarAccountNumber: "5555 6666 7777 7106",
//     dollarAccountBalance: 54120,
//     rubleAccountNumber: "9999 0000 1111 3838",
//     rubleAccountBalance: 29512,
//   },
//   {
//     id: 7,
//     firstName: "User7",
//     lastName: "LastName7",
//     phoneNumber: "+1234567816",
//     mainCardAccountNumber: "1234 5678 9012 8920",
//     mainCardAccountBalance: 35259,
//     mainSavingsAccountNumber: "9876 5432 1098 8755",
//     mainSavingsAccountBalance: 0,
//     dollarAccountNumber: "5555 6666 7777 3505",
//     dollarAccountBalance: 7885,
//     rubleAccountNumber: "9999 0000 1111 9883",
//     rubleAccountBalance: 74395,
//   },
//   {
//     id: 8,
//     firstName: "User8",
//     lastName: "LastName8",
//     phoneNumber: "+1234567817",
//     mainCardAccountNumber: "1234 5678 9012 6017",
//     mainCardAccountBalance: 65638,
//     mainSavingsAccountNumber: "9876 5432 1098 2345",
//     mainSavingsAccountBalance: 73936,
//     euroAccountNumber: "1111 2222 3333 8167",
//     euroAccountBalance: 68687,
//     dollarAccountNumber: "5555 6666 7777 6215",
//     dollarAccountBalance: 8936,
//     rubleAccountNumber: "9999 0000 1111 7836",
//     rubleAccountBalance: 14646,
//   },
//   {
//     id: 9,
//     firstName: "User9",
//     lastName: "LastName9",
//     phoneNumber: "+1234567818",
//     mainCardAccountNumber: "1234 5678 9012 8633",
//     mainCardAccountBalance: 0,
//     mainSavingsAccountNumber: "9876 5432 1098 6507",
//     mainSavingsAccountBalance: 0,
//     euroAccountNumber: "1111 2222 3333 5591",
//     euroAccountBalance: 63664,
//     dollarAccountNumber: "5555 6666 7777 1911",
//     dollarAccountBalance: 15108,
//     rubleAccountNumber: "9999 0000 1111 6775",
//     rubleAccountBalance: 38147,
//   },
//   {
//     id: 10,
//     firstName: "User10",
//     lastName: "LastName10",
//     phoneNumber: "+1234567819",
//     mainCardAccountNumber: "1234 5678 9012 8708",
//     mainCardAccountBalance: 43139,
//     mainSavingsAccountNumber: "9876 5432 1098 3989",
//     mainSavingsAccountBalance: 47992,
//     euroAccountNumber: "1111 2222 3333 7732",
//     euroAccountBalance: 40068,
//     dollarAccountNumber: "5555 6666 7777 7488",
//     dollarAccountBalance: 71623,
//     rubleAccountNumber: "9999 0000 1111 4393",
//     rubleAccountBalance: 71598,
//   },
//   {
//     id: 11,
//     firstName: "User11",
//     lastName: "LastName11",
//     phoneNumber: "+1234567820",
//     mainCardAccountNumber: "1234 5678 9012 4633",
//     mainCardAccountBalance: 12314,
//     mainSavingsAccountNumber: "9876 5432 1098 7705",
//     mainSavingsAccountBalance: 50255,
//     euroAccountNumber: "1111 2222 3333 7190",
//     euroAccountBalance: 48390,
//     dollarAccountNumber: "5555 6666 7777 2779",
//     dollarAccountBalance: 50269,
//     rubleAccountNumber: "9999 0000 1111 1648",
//     rubleAccountBalance: 64623,
//   },
//   {
//     id: 12,
//     firstName: "User12",
//     lastName: "LastName12",
//     phoneNumber: "+1234567821",
//     mainCardAccountNumber: "1234 5678 9012 8410",
//     mainCardAccountBalance: 42346,
//     mainSavingsAccountNumber: "9876 5432 1098 4380",
//     mainSavingsAccountBalance: 43853,
//     euroAccountNumber: "1111 2222 3333 2525",
//     euroAccountBalance: 32901,
//     dollarAccountNumber: "5555 6666 7777 3120",
//     dollarAccountBalance: 92287,
//     rubleAccountNumber: "9999 0000 1111 8909",
//     rubleAccountBalance: 6517,
//   },
//   {
//     id: 13,
//     firstName: "User13",
//     lastName: "LastName13",
//     phoneNumber: "+1234567822",
//     mainCardAccountNumber: "1234 5678 9012 2755",
//     mainCardAccountBalance: 39824,
//     mainSavingsAccountNumber: "9876 5432 1098 5932",
//     mainSavingsAccountBalance: 9959,
//     euroAccountNumber: "1111 2222 3333 3085",
//     euroAccountBalance: 7977,
//     dollarAccountNumber: "5555 6666 7777 5088",
//     dollarAccountBalance: 76633,
//     rubleAccountNumber: "9999 0000 1111 2145",
//     rubleAccountBalance: 90284,
//   },
//   {
//     id: 14,
//     firstName: "User14",
//     lastName: "LastName14",
//     phoneNumber: "+1234567823",
//     mainCardAccountNumber: "1234 5678 9012 7614",
//     mainCardAccountBalance: 0,
//     mainSavingsAccountNumber: "9876 5432 1098 9062",
//     mainSavingsAccountBalance: 0,
//     euroAccountNumber: "1111 2222 3333 2524",
//     euroAccountBalance: 0,
//     dollarAccountNumber: "5555 6666 7777 1411",
//     dollarAccountBalance: 0,
//     rubleAccountNumber: "9999 0000 1111 6635",
//     rubleAccountBalance: 0,
//   },
//   {
//     id: 15,
//     firstName: "User15",
//     lastName: "LastName15",
//     phoneNumber: "+1234567824",
//     mainCardAccountNumber: "1234 5678 9012 1451",
//     mainCardAccountBalance: 5871,
//     mainSavingsAccountNumber: "9876 5432 1098 7767",
//     mainSavingsAccountBalance: 53196,
//     euroAccountNumber: "1111 2222 3333 2613",
//     euroAccountBalance: 81597,
//     dollarAccountNumber: "5555 6666 7777 5512",
//     dollarAccountBalance: 47379,
//     rubleAccountNumber: "9999 0000 1111 6635",
//     rubleAccountBalance: 101779,
//   },
//   {
//     id: 16,
//     firstName: "User16",
//     lastName: "LastName16",
//     phoneNumber: "+1234567825",
//     mainCardAccountNumber: "1234 5678 9012 6197",
//     mainCardAccountBalance: 55109,
//     mainSavingsAccountNumber: "9876 5432 1098 9485",
//     mainSavingsAccountBalance: 0,
//     dollarAccountNumber: "5555 6666 7777 1249",
//     dollarAccountBalance: 54538,
//     rubleAccountNumber: "9999 0000 1111 5751",
//     rubleAccountBalance: 16586,
//   },
//   {
//     id: 17,
//     firstName: "User17",
//     lastName: "LastName17",
//     phoneNumber: "+1234567826",
//     mainCardAccountNumber: "1234 5678 9012 7463",
//     mainCardAccountBalance: 65160,
//     mainSavingsAccountNumber: "9876 5432 1098 6383",
//     mainSavingsAccountBalance: 0,
//     euroAccountNumber: "1111 2222 3333 9576",
//     euroAccountBalance: 9435,
//     dollarAccountNumber: "5555 6666 7777 8703",
//     dollarAccountBalance: 42809,
//   },
//   {
//     id: 18,
//     firstName: "User18",
//     lastName: "LastName18",
//     phoneNumber: "+1234567827",
//     mainCardAccountNumber: "1234 5678 9012 6672",
//     mainCardAccountBalance: 45597,
//     mainSavingsAccountNumber: "9876 5432 1098 8886",
//     mainSavingsAccountBalance: 36858,
//     euroAccountNumber: "1111 2222 3333 8529",
//     euroAccountBalance: 25067,
//     dollarAccountNumber: "5555 6666 7777 8925",
//     dollarAccountBalance: 70176,
//     rubleAccountNumber: "9999 0000 1111 6570",
//     rubleAccountBalance: 102113,
//   },
//   {
//     id: 19,
//     firstName: "User19",
//     lastName: "LastName19",
//     phoneNumber: "+1234567828",
//     mainCardAccountNumber: "1234 5678 9012 5871",
//     mainCardAccountBalance: 96538,
//     mainSavingsAccountNumber: "9876 5432 1098 6293",
//     mainSavingsAccountBalance: 41502,
//     euroAccountNumber: "1111 2222 3333 2042",
//     euroAccountBalance: 13383,
//     dollarAccountNumber: "5555 6666 7777 4466",
//     dollarAccountBalance: 97753,
//     rubleAccountNumber: "9999 0000 1111 8494",
//     rubleAccountBalance: 66313,
//   },
//   {
//     id: 20,
//     firstName: "User20",
//     lastName: "LastName20",
//     phoneNumber: "+1234567829",
//     mainCardAccountNumber: "1234 5678 9012 6874",
//     mainCardAccountBalance: 77725,
//     mainSavingsAccountNumber: "9876 5432 1098 7976",
//     mainSavingsAccountBalance: 94807,
//     euroAccountNumber: "1111 2222 3333 5158",
//     euroAccountBalance: 59493,
//     dollarAccountNumber: "5555 6666 7777 8827",
//     dollarAccountBalance: 78595,
//   },
//   {
//     id: 21,
//     firstName: "User21",
//     lastName: "LastName21",
//     phoneNumber: "+1234567830",
//     mainCardAccountNumber: "1234 5678 9012 6063",
//     mainCardAccountBalance: 102965,
//     mainSavingsAccountNumber: "9876 5432 1098 6005",
//     mainSavingsAccountBalance: 79331,
//     euroAccountNumber: "1111 2222 3333 8497",
//     euroAccountBalance: 35395,
//     dollarAccountNumber: "5555 6666 7777 3213",
//     dollarAccountBalance: 8074,
//     rubleAccountNumber: "9999 0000 1111 1202",
//     rubleAccountBalance: 14432,
//   },
//   {
//     id: 22,
//     firstName: "User22",
//     lastName: "LastName22",
//     phoneNumber: "+1234567831",
//     mainCardAccountNumber: "1234 5678 9012 1744",
//     mainCardAccountBalance: 0,
//     mainSavingsAccountNumber: "9876 5432 1098 1018",
//     mainSavingsAccountBalance: 6510,
//     euroAccountNumber: "1111 2222 3333 9611",
//     euroAccountBalance: 97001,
//     dollarAccountNumber: "5555 6666 7777 3698",
//     dollarAccountBalance: 0,
//     rubleAccountNumber: "9999 0000 1111 4377",
//     rubleAccountBalance: 0,
//   },
//   {
//     id: 23,
//     firstName: "User23",
//     lastName: "LastName23",
//     phoneNumber: "+1234567832",
//     mainCardAccountNumber: "1234 5678 9012 9414",
//     mainCardAccountBalance: 49603,
//     mainSavingsAccountNumber: "9876 5432 1098 7167",
//     mainSavingsAccountBalance: 61627,
//     euroAccountNumber: "1111 2222 3333 8192",
//     euroAccountBalance: 31524,
//     rubleAccountNumber: "9999 0000 1111 8347",
//     rubleAccountBalance: 65087,
//   },
//   {
//     id: 24,
//     firstName: "User24",
//     lastName: "LastName24",
//     phoneNumber: "+1234567833",
//     mainCardAccountNumber: "1234 5678 9012 7667",
//     mainCardAccountBalance: 18099,
//     mainSavingsAccountNumber: "9876 5432 1098 3714",
//     mainSavingsAccountBalance: 0,
//     euroAccountNumber: "1111 2222 3333 3992",
//     euroAccountBalance: 0,
//     dollarAccountNumber: "5555 6666 7777 6293",
//     dollarAccountBalance: 0,
//     rubleAccountNumber: "9999 0000 1111 1943",
//     rubleAccountBalance: 0,
//   },
//   {
//     id: 25,
//     firstName: "User25",
//     lastName: "LastName25",
//     phoneNumber: "+1234567834",
//     mainCardAccountNumber: "1234 5678 9012 1548",
//     mainCardAccountBalance: 39328,
//     mainSavingsAccountNumber: "9876 5432 1098 7123",
//     mainSavingsAccountBalance: 14045,
//     euroAccountNumber: "1111 2222 3333 9721",
//     euroAccountBalance: 26438,
//     rubleAccountNumber: "9999 0000 1111 4103",
//     rubleAccountBalance: 36239,
//   },
//   {
//     id: 26,
//     firstName: "User26",
//     lastName: "LastName26",
//     phoneNumber: "+1234567835",
//     mainCardAccountNumber: "1234 5678 9012 4867",
//     mainCardAccountBalance: 49506,
//     mainSavingsAccountNumber: "9876 5432 1098 5673",
//     mainSavingsAccountBalance: 16563,
//     euroAccountNumber: "1111 2222 3333 5264",
//     euroAccountBalance: 93244,
//     dollarAccountNumber: "5555 6666 7777 3231",
//     dollarAccountBalance: 70684,
//     rubleAccountNumber: "9999 0000 1111 1446",
//     rubleAccountBalance: 50169,
//   },
//   {
//     id: 27,
//     firstName: "User27",
//     lastName: "LastName27",
//     phoneNumber: "+1234567836",
//     mainCardAccountNumber: "1234 5678 9012 3379",
//     mainCardAccountBalance: 36566,
//     mainSavingsAccountNumber: "9876 5432 1098 2638",
//     mainSavingsAccountBalance: 84134,
//     euroAccountNumber: "1111 2222 3333 9236",
//     euroAccountBalance: 5910,
//     dollarAccountNumber: "5555 6666 7777 6475",
//     dollarAccountBalance: 81771,
//     rubleAccountNumber: "9999 0000 1111 5787",
//     rubleAccountBalance: 48733,
//   },
//   {
//     id: 28,
//     firstName: "User28",
//     lastName: "LastName28",
//     phoneNumber: "+1234567837",
//     mainCardAccountNumber: "1234 5678 9012 7849",
//     mainCardAccountBalance: 19167,
//     mainSavingsAccountNumber: "9876 5432 1098 4840",
//     mainSavingsAccountBalance: 51786,
//     dollarAccountNumber: "5555 6666 7777 4123",
//     dollarAccountBalance: 80118,
//     rubleAccountNumber: "9999 0000 1111 3480",
//     rubleAccountBalance: 57240,
//   },
//   {
//     id: 29,
//     firstName: "User29",
//     lastName: "LastName29",
//     phoneNumber: "+1234567838",
//     mainCardAccountNumber: "1234 5678 9012 8988",
//     mainCardAccountBalance: 74352,
//     mainSavingsAccountNumber: "9876 5432 1098 4057",
//     mainSavingsAccountBalance: 102535,
//     euroAccountNumber: "1111 2222 3333 7495",
//     euroAccountBalance: 12252,
//     dollarAccountNumber: "5555 6666 7777 2549",
//     dollarAccountBalance: 24073,
//     rubleAccountNumber: "9999 0000 1111 6686",
//     rubleAccountBalance: 68966,
//   },
//   {
//     id: 30,
//     firstName: "User30",
//     lastName: "LastName30",
//     phoneNumber: "+1234567839",
//     mainCardAccountNumber: "1234 5678 9012 1497",
//     mainCardAccountBalance: 68179,
//     mainSavingsAccountNumber: "9876 5432 1098 7262",
//     mainSavingsAccountBalance: 73953,
//     euroAccountNumber: "1111 2222 3333 6610",
//     euroAccountBalance: 104913,
//     dollarAccountNumber: "5555 6666 7777 5294",
//     dollarAccountBalance: 37392,
//     rubleAccountNumber: "9999 0000 1111 5185",
//     rubleAccountBalance: 85871,
//   },
//   {
//     id: 31,
//     firstName: "User31",
//     lastName: "LastName31",
//     phoneNumber: "+1234567840",
//     mainCardAccountNumber: "1234 5678 9012 7815",
//     mainCardAccountBalance: 0,
//     mainSavingsAccountNumber: "9876 5432 1098 8032",
//     mainSavingsAccountBalance: 5127,
//     euroAccountNumber: "1111 2222 3333 4955",
//     euroAccountBalance: 0,
//     dollarAccountNumber: "5555 6666 7777 3281",
//     dollarAccountBalance: 24398,
//     rubleAccountNumber: "9999 0000 1111 6465",
//     rubleAccountBalance: 0,
//   },
//   {
//     id: 32,
//     firstName: "User32",
//     lastName: "LastName32",
//     phoneNumber: "+1234567841",
//     mainCardAccountNumber: "1234 5678 9012 2485",
//     mainCardAccountBalance: 58303,
//     mainSavingsAccountNumber: "9876 5432 1098 3096",
//     mainSavingsAccountBalance: 29032,
//     euroAccountNumber: "1111 2222 3333 5740",
//     euroAccountBalance: 87548,
//     dollarAccountNumber: "5555 6666 7777 5581",
//     dollarAccountBalance: 25666,
//     rubleAccountNumber: "9999 0000 1111 3182",
//     rubleAccountBalance: 79714,
//   },
//   {
//     id: 33,
//     firstName: "User33",
//     lastName: "LastName33",
//     phoneNumber: "+1234567842",
//     mainCardAccountNumber: "1234 5678 9012 6833",
//     mainCardAccountBalance: 87528,
//     mainSavingsAccountNumber: "9876 5432 1098 7668",
//     mainSavingsAccountBalance: 42837,
//     euroAccountNumber: "1111 2222 3333 3269",
//     euroAccountBalance: 44892,
//     dollarAccountNumber: "5555 6666 7777 7226",
//     dollarAccountBalance: 68367,
//     rubleAccountNumber: "9999 0000 1111 8832",
//     rubleAccountBalance: 82320,
//   },
//   {
//     id: 34,
//     firstName: "User34",
//     lastName: "LastName34",
//     phoneNumber: "+1234567843",
//     mainCardAccountNumber: "1234 5678 9012 3164",
//     mainCardAccountBalance: 19846,
//     mainSavingsAccountNumber: "9876 5432 1098 1429",
//     mainSavingsAccountBalance: 93032,
//     euroAccountNumber: "1111 2222 3333 7205",
//     euroAccountBalance: 90002,
//     dollarAccountNumber: "5555 6666 7777 5917",
//     dollarAccountBalance: 59426,
//     rubleAccountNumber: "9999 0000 1111 6528",
//     rubleAccountBalance: 28014,
//   },
//   {
//     id: 35,
//     firstName: "User35",
//     lastName: "LastName35",
//     phoneNumber: "+1234567844",
//     mainCardAccountNumber: "1234 5678 9012 9096",
//     mainCardAccountBalance: 9235,
//     mainSavingsAccountNumber: "9876 5432 1098 3443",
//     mainSavingsAccountBalance: 42393,
//     euroAccountNumber: "1111 2222 3333 2861",
//     euroAccountBalance: 58006,
//     dollarAccountNumber: "5555 6666 7777 5503",
//     dollarAccountBalance: 78689,
//     rubleAccountNumber: "9999 0000 1111 5059",
//     rubleAccountBalance: 47232,
//   },
//   {
//     id: 36,
//     firstName: "User36",
//     lastName: "LastName36",
//     phoneNumber: "+1234567845",
//     mainCardAccountNumber: "1234 5678 9012 8131",
//     mainCardAccountBalance: 25211,
//     mainSavingsAccountNumber: "9876 5432 1098 7139",
//     mainSavingsAccountBalance: 49063,
//     euroAccountNumber: "1111 2222 3333 9544",
//     euroAccountBalance: 66041,
//     dollarAccountNumber: "5555 6666 7777 2830",
//     dollarAccountBalance: 15684,
//     rubleAccountNumber: "9999 0000 1111 6902",
//     rubleAccountBalance: 37636,
//   },
//   {
//     id: 37,
//     firstName: "User37",
//     lastName: "LastName37",
//     phoneNumber: "+1234567846",
//     mainCardAccountNumber: "1234 5678 9012 3590",
//     mainCardAccountBalance: 24374,
//     mainSavingsAccountNumber: "9876 5432 1098 6810",
//     mainSavingsAccountBalance: 0,
//     euroAccountNumber: "1111 2222 3333 4500",
//     euroAccountBalance: 48485,
//     dollarAccountNumber: "5555 6666 7777 1238",
//     dollarAccountBalance: 0,
//   },
//   {
//     id: 38,
//     firstName: "User38",
//     lastName: "LastName38",
//     phoneNumber: "+1234567847",
//     mainCardAccountNumber: "1234 5678 9012 9623",
//     mainCardAccountBalance: 55433,
//     mainSavingsAccountNumber: "9876 5432 1098 6705",
//     mainSavingsAccountBalance: 69448,
//     euroAccountNumber: "1111 2222 3333 8747",
//     euroAccountBalance: 19077,
//     dollarAccountNumber: "5555 6666 7777 1659",
//     dollarAccountBalance: 47650,
//     rubleAccountNumber: "9999 0000 1111 3884",
//     rubleAccountBalance: 56692,
//   },
//   {
//     id: 39,
//     firstName: "User39",
//     lastName: "LastName39",
//     phoneNumber: "+1234567848",
//     mainCardAccountNumber: "1234 5678 9012 3948",
//     mainCardAccountBalance: 67243,
//     mainSavingsAccountNumber: "9876 5432 1098 9745",
//     mainSavingsAccountBalance: 74640,
//     euroAccountNumber: "1111 2222 3333 4251",
//     euroAccountBalance: 12631,
//     dollarAccountNumber: "5555 6666 7777 8075",
//     dollarAccountBalance: 49785,
//     rubleAccountNumber: "9999 0000 1111 9425",
//     rubleAccountBalance: 45671,
//   },
//   {
//     id: 40,
//     firstName: "User40",
//     lastName: "LastName40",
//     phoneNumber: "+1234567849",
//     mainCardAccountNumber: "1234 5678 9012 4160",
//     mainCardAccountBalance: 94050,
//     mainSavingsAccountNumber: "9876 5432 1098 2446",
//     mainSavingsAccountBalance: 73184,
//     euroAccountNumber: "1111 2222 3333 4413",
//     euroAccountBalance: 62657,
//     dollarAccountNumber: "5555 6666 7777 1308",
//     dollarAccountBalance: 61797,
//     rubleAccountNumber: "9999 0000 1111 6220",
//     rubleAccountBalance: 83598,
//   },
//   {
//     id: 41,
//     firstName: "User41",
//     lastName: "LastName41",
//     phoneNumber: "+1234567850",
//     mainCardAccountNumber: "1234 5678 9012 2845",
//     mainCardAccountBalance: 59555,
//     mainSavingsAccountNumber: "9876 5432 1098 2401",
//     mainSavingsAccountBalance: 0,
//     euroAccountNumber: "1111 2222 3333 8754",
//     euroAccountBalance: 0,
//     dollarAccountNumber: "5555 6666 7777 1656",
//     dollarAccountBalance: 0,
//     rubleAccountNumber: "9999 0000 1111 3455",
//     rubleAccountBalance: 0,
//   },
//   {
//     id: 42,
//     firstName: "User42",
//     lastName: "LastName42",
//     phoneNumber: "+1234567851",
//     mainCardAccountNumber: "1234 5678 9012 7585",
//     mainCardAccountBalance: 51022,
//     mainSavingsAccountNumber: "9876 5432 1098 3736",
//     mainSavingsAccountBalance: 62928,
//     euroAccountNumber: "1111 2222 3333 7972",
//     euroAccountBalance: 36491,
//     dollarAccountNumber: "5555 6666 7777 8181",
//     dollarAccountBalance: 61388,
//     rubleAccountNumber: "9999 0000 1111 2768",
//     rubleAccountBalance: 58472,
//   },
//   {
//     id: 43,
//     firstName: "User43",
//     lastName: "LastName43",
//     phoneNumber: "+1234567852",
//     mainCardAccountNumber: "1234 5678 9012 3637",
//     mainCardAccountBalance: 77464,
//     mainSavingsAccountNumber: "9876 5432 1098 2985",
//     mainSavingsAccountBalance: 104452,
//     euroAccountNumber: "1111 2222 3333 1598",
//     euroAccountBalance: 15361,
//     dollarAccountNumber: "5555 6666 7777 4510",
//     dollarAccountBalance: 49252,
//     rubleAccountNumber: "9999 0000 1111 1235",
//     rubleAccountBalance: 21883,
//   },
//   {
//     id: 44,
//     firstName: "User44",
//     lastName: "LastName44",
//     phoneNumber: "+1234567853",
//     mainCardAccountNumber: "1234 5678 9012 6676",
//     mainCardAccountBalance: 22293,
//     mainSavingsAccountNumber: "9876 5432 1098 6289",
//     mainSavingsAccountBalance: 0,
//     euroAccountNumber: "1111 2222 3333 4646",
//     euroAccountBalance: 0,
//     dollarAccountNumber: "5555 6666 7777 3854",
//     dollarAccountBalance: 0,
//   },
//   {
//     id: 45,
//     firstName: "User45",
//     lastName: "LastName45",
//     phoneNumber: "+1234567854",
//     mainCardAccountNumber: "1234 5678 9012 7605",
//     mainCardAccountBalance: 84543,
//     mainSavingsAccountNumber: "9876 5432 1098 3729",
//     mainSavingsAccountBalance: 72252,
//     euroAccountNumber: "1111 2222 3333 4208",
//     euroAccountBalance: 63201,
//   },
//   {
//     id: 46,
//     firstName: "User46",
//     lastName: "LastName46",
//     phoneNumber: "+1234567855",
//     mainCardAccountNumber: "1234 5678 9012 2187",
//     mainCardAccountBalance: 13952,
//     mainSavingsAccountNumber: "9876 5432 1098 1370",
//     mainSavingsAccountBalance: 77860,
//     euroAccountNumber: "1111 2222 3333 4445",
//     euroAccountBalance: 30314,
//     dollarAccountNumber: "5555 6666 7777 6309",
//     dollarAccountBalance: 44735,
//     rubleAccountNumber: "9999 0000 1111 5279",
//     rubleAccountBalance: 77733,
//   },
//   {
//     id: 47,
//     firstName: "User47",
//     lastName: "LastName47",
//     phoneNumber: "+1234567856",
//     mainCardAccountNumber: "1234 5678 9012 1564",
//     mainCardAccountBalance: 37977,
//     mainSavingsAccountNumber: "9876 5432 1098 5496",
//     mainSavingsAccountBalance: 56459,
//     euroAccountNumber: "1111 2222 3333 5670",
//     euroAccountBalance: 55007,
//     dollarAccountNumber: "5555 6666 7777 5485",
//     dollarAccountBalance: 37173,
//     rubleAccountNumber: "9999 0000 1111 8666",
//     rubleAccountBalance: 56705,
//   },
//   {
//     id: 48,
//     firstName: "User48",
//     lastName: "LastName48",
//     phoneNumber: "+1234567857",
//     mainCardAccountNumber: "1234 5678 9012 1170",
//     mainCardAccountBalance: 13902,
//     mainSavingsAccountNumber: "9876 5432 1098 3379",
//     mainSavingsAccountBalance: 90791,
//     euroAccountNumber: "1111 2222 3333 1458",
//     euroAccountBalance: 8268,
//     dollarAccountNumber: "5555 6666 7777 7271",
//     dollarAccountBalance: 56150,
//     rubleAccountNumber: "9999 0000 1111 1268",
//     rubleAccountBalance: 0,
//   },
//   {
//     id: 49,
//     firstName: "User49",
//     lastName: "LastName49",
//     phoneNumber: "+1234567858",
//     mainCardAccountNumber: "1234 5678 9012 3865",
//     mainCardAccountBalance: 36916,
//     mainSavingsAccountNumber: "9876 5432 1098 1458",
//     mainSavingsAccountBalance: 61577,
//     euroAccountNumber: "1111 2222 3333 6522",
//     euroAccountBalance: 12320,
//     dollarAccountNumber: "5555 6666 7777 4505",
//     dollarAccountBalance: 100122,
//     rubleAccountNumber: "9999 0000 1111 6643",
//     rubleAccountBalance: 0,
//   },
//   {
//     id: 50,
//     firstName: "User50",
//     lastName: "LastName50",
//     phoneNumber: "+1234567859",
//     mainCardAccountNumber: "1234 5678 9012 5890",
//     mainCardAccountBalance: 26848,
//     mainSavingsAccountNumber: "9876 5432 1098 6754",
//     mainSavingsAccountBalance: 20322,
//     dollarAccountNumber: "5555 6666 7777 9394",
//     dollarAccountBalance: 0,
//   },
//   {
//     id: 51,
//     firstName: "User51",
//     lastName: "LastName51",
//     phoneNumber: "+1234567860",
//     mainCardAccountNumber: "1234 5678 9012 6921",
//     mainCardAccountBalance: 87805,
//     mainSavingsAccountNumber: "9876 5432 1098 8151",
//     mainSavingsAccountBalance: 43027,
//     euroAccountNumber: "1111 2222 3333 8664",
//     euroAccountBalance: 90486,
//     dollarAccountNumber: "5555 6666 7777 1336",
//     dollarAccountBalance: 98379,
//     rubleAccountNumber: "9999 0000 1111 1822",
//     rubleAccountBalance: 30355,
//   },
//   {
//     id: 52,
//     firstName: "User52",
//     lastName: "LastName52",
//     phoneNumber: "+1234567861",
//     mainCardAccountNumber: "1234 5678 9012 1435",
//     mainCardAccountBalance: 83850,
//     mainSavingsAccountNumber: "9876 5432 1098 5383",
//     mainSavingsAccountBalance: 40417,
//     euroAccountNumber: "1111 2222 3333 9513",
//     euroAccountBalance: 80105,
//     dollarAccountNumber: "5555 6666 7777 7554",
//     dollarAccountBalance: 47060,
//     rubleAccountNumber: "9999 0000 1111 9658",
//     rubleAccountBalance: 62353,
//   },
//   {
//     id: 53,
//     firstName: "User53",
//     lastName: "LastName53",
//     phoneNumber: "+1234567862",
//     mainCardAccountNumber: "1234 5678 9012 2262",
//     mainCardAccountBalance: 26389,
//     mainSavingsAccountNumber: "9876 5432 1098 9223",
//     mainSavingsAccountBalance: 37961,
//     dollarAccountNumber: "5555 6666 7777 3479",
//     dollarAccountBalance: 10518,
//     rubleAccountNumber: "9999 0000 1111 5388",
//     rubleAccountBalance: 0,
//   },
//   {
//     id: 54,
//     firstName: "User54",
//     lastName: "LastName54",
//     phoneNumber: "+1234567863",
//     mainCardAccountNumber: "1234 5678 9012 1299",
//     mainCardAccountBalance: 5167,
//     mainSavingsAccountNumber: "9876 5432 1098 2848",
//     mainSavingsAccountBalance: 41810,
//     dollarAccountNumber: "5555 6666 7777 7014",
//     dollarAccountBalance: 0,
//   },
//   {
//     id: 55,
//     firstName: "User55",
//     lastName: "LastName55",
//     phoneNumber: "+1234567864",
//     mainCardAccountNumber: "1234 5678 9012 1191",
//     mainCardAccountBalance: 68626,
//     mainSavingsAccountNumber: "9876 5432 1098 2063",
//     mainSavingsAccountBalance: 32939,
//     euroAccountNumber: "1111 2222 3333 9145",
//     euroAccountBalance: 83945,
//     dollarAccountNumber: "5555 6666 7777 1718",
//     dollarAccountBalance: 57257,
//     rubleAccountNumber: "9999 0000 1111 4210",
//     rubleAccountBalance: 0,
//   },
//   {
//     id: 56,
//     firstName: "User56",
//     lastName: "LastName56",
//     phoneNumber: "+1234567865",
//     mainCardAccountNumber: "1234 5678 9012 2349",
//     mainCardAccountBalance: 37890,
//     mainSavingsAccountNumber: "9876 5432 1098 9938",
//     mainSavingsAccountBalance: 21773,
//     euroAccountNumber: "1111 2222 3333 7066",
//     euroAccountBalance: 38603,
//     dollarAccountNumber: "5555 6666 7777 9123",
//     dollarAccountBalance: 34089,
//     rubleAccountNumber: "9999 0000 1111 8982",
//     rubleAccountBalance: 66753,
//   },
//   {
//     id: 57,
//     firstName: "User57",
//     lastName: "LastName57",
//     phoneNumber: "+1234567866",
//     mainCardAccountNumber: "1234 5678 9012 8533",
//     mainCardAccountBalance: 23112,
//     mainSavingsAccountNumber: "9876 5432 1098 7303",
//     mainSavingsAccountBalance: 83961,
//     euroAccountNumber: "1111 2222 3333 8689",
//     euroAccountBalance: 61639,
//     dollarAccountNumber: "5555 6666 7777 9662",
//     dollarAccountBalance: 10807,
//     rubleAccountNumber: "9999 0000 1111 7412",
//     rubleAccountBalance: 54135,
//   },
//   {
//     id: 58,
//     firstName: "User58",
//     lastName: "LastName58",
//     phoneNumber: "+1234567867",
//     mainCardAccountNumber: "1234 5678 9012 8015",
//     mainCardAccountBalance: 27773,
//     mainSavingsAccountNumber: "9876 5432 1098 1056",
//     mainSavingsAccountBalance: 94874,
//     euroAccountNumber: "1111 2222 3333 5330",
//     euroAccountBalance: 84526,
//     dollarAccountNumber: "5555 6666 7777 3773",
//     dollarAccountBalance: 75008,
//     rubleAccountNumber: "9999 0000 1111 7465",
//     rubleAccountBalance: 51887,
//   },
//   {
//     id: 59,
//     firstName: "User59",
//     lastName: "LastName59",
//     phoneNumber: "+1234567868",
//     mainCardAccountNumber: "1234 5678 9012 1472",
//     mainCardAccountBalance: 52807,
//     mainSavingsAccountNumber: "9876 5432 1098 8823",
//     mainSavingsAccountBalance: 9518,
//     dollarAccountNumber: "5555 6666 7777 7685",
//     dollarAccountBalance: 104134,
//   },
//   {
//     id: 60,
//     firstName: "User60",
//     lastName: "LastName60",
//     phoneNumber: "+1234567869",
//     mainCardAccountNumber: "1234 5678 9012 5100",
//     mainCardAccountBalance: 69073,
//     mainSavingsAccountNumber: "9876 5432 1098 4158",
//     mainSavingsAccountBalance: 30138,
//     euroAccountNumber: "1111 2222 3333 8643",
//     euroAccountBalance: 82074,
//     dollarAccountNumber: "5555 6666 7777 5930",
//     dollarAccountBalance: 84255,
//     rubleAccountNumber: "9999 0000 1111 8279",
//     rubleAccountBalance: 42211,
//   },
//   {
//     id: 61,
//     firstName: "User61",
//     lastName: "LastName61",
//     phoneNumber: "+1234567870",
//     mainCardAccountNumber: "1234 5678 9012 2470",
//     mainCardAccountBalance: 57579,
//     mainSavingsAccountNumber: "9876 5432 1098 8355",
//     mainSavingsAccountBalance: 45248,
//     euroAccountNumber: "1111 2222 3333 6441",
//     euroAccountBalance: 73956,
//     dollarAccountNumber: "5555 6666 7777 7478",
//     dollarAccountBalance: 97786,
//     rubleAccountNumber: "9999 0000 1111 4396",
//     rubleAccountBalance: 12014,
//   },
//   {
//     id: 62,
//     firstName: "User62",
//     lastName: "LastName62",
//     phoneNumber: "+1234567871",
//     mainCardAccountNumber: "1234 5678 9012 6942",
//     mainCardAccountBalance: 61629,
//     mainSavingsAccountNumber: "9876 5432 1098 8191",
//     mainSavingsAccountBalance: 73439,
//     euroAccountNumber: "1111 2222 3333 8667",
//     euroAccountBalance: 0,
//   },
//   {
//     id: 63,
//     firstName: "User63",
//     lastName: "LastName63",
//     phoneNumber: "+1234567872",
//     mainCardAccountNumber: "1234 5678 9012 7805",
//     mainCardAccountBalance: 18028,
//     mainSavingsAccountNumber: "9876 5432 1098 4440",
//     mainSavingsAccountBalance: 34887,
//     euroAccountNumber: "1111 2222 3333 4619",
//     euroAccountBalance: 23089,
//     dollarAccountNumber: "5555 6666 7777 1473",
//     dollarAccountBalance: 28674,
//     rubleAccountNumber: "9999 0000 1111 1006",
//     rubleAccountBalance: 14072,
//   },
//   {
//     id: 64,
//     firstName: "User64",
//     lastName: "LastName64",
//     phoneNumber: "+1234567873",
//     mainCardAccountNumber: "1234 5678 9012 8011",
//     mainCardAccountBalance: 102001,
//     mainSavingsAccountNumber: "9876 5432 1098 2698",
//     mainSavingsAccountBalance: 36929,
//     euroAccountNumber: "1111 2222 3333 1487",
//     euroAccountBalance: 35838,
//     dollarAccountNumber: "5555 6666 7777 7160",
//     dollarAccountBalance: 75455,
//     rubleAccountNumber: "9999 0000 1111 3646",
//     rubleAccountBalance: 0,
//   },
//   {
//     id: 65,
//     firstName: "User65",
//     lastName: "LastName65",
//     phoneNumber: "+1234567874",
//     mainCardAccountNumber: "1234 5678 9012 4493",
//     mainCardAccountBalance: 98145,
//     mainSavingsAccountNumber: "9876 5432 1098 3469",
//     mainSavingsAccountBalance: 82792,
//     euroAccountNumber: "1111 2222 3333 4124",
//     euroAccountBalance: 49989,
//     dollarAccountNumber: "5555 6666 7777 6673",
//     dollarAccountBalance: 40987,
//     rubleAccountNumber: "9999 0000 1111 6931",
//     rubleAccountBalance: 99569,
//   },
//   {
//     id: 66,
//     firstName: "User66",
//     lastName: "LastName66",
//     phoneNumber: "+1234567875",
//     mainCardAccountNumber: "1234 5678 9012 3532",
//     mainCardAccountBalance: 120,
//     mainSavingsAccountNumber: "9876 5432 1098 4132",
//     mainSavingsAccountBalance: 0,
//   },
//   {
//     id: 67,
//     firstName: "User67",
//     lastName: "LastName67",
//     phoneNumber: "+1234567876",
//     mainCardAccountNumber: "1234 5678 9012 3425",
//     mainCardAccountBalance: 76808,
//     mainSavingsAccountNumber: "9876 5432 1098 1913",
//     mainSavingsAccountBalance: 9450,
//     euroAccountNumber: "1111 2222 3333 6932",
//     euroAccountBalance: 37577,
//     dollarAccountNumber: "5555 6666 7777 4430",
//     dollarAccountBalance: 9588,
//     rubleAccountNumber: "9999 0000 1111 3331",
//     rubleAccountBalance: 50315,
//   },
//   {
//     id: 68,
//     firstName: "User68",
//     lastName: "LastName68",
//     phoneNumber: "+1234567877",
//     mainCardAccountNumber: "1234 5678 9012 6009",
//     mainCardAccountBalance: 71232,
//     mainSavingsAccountNumber: "9876 5432 1098 8987",
//     mainSavingsAccountBalance: 39692,
//     euroAccountNumber: "1111 2222 3333 3144",
//     euroAccountBalance: 92725,
//     dollarAccountNumber: "5555 6666 7777 3093",
//     dollarAccountBalance: 68136,
//     rubleAccountNumber: "9999 0000 1111 1349",
//     rubleAccountBalance: 58917,
//   },
//   {
//     id: 69,
//     firstName: "User69",
//     lastName: "LastName69",
//     phoneNumber: "+1234567878",
//     mainCardAccountNumber: "1234 5678 9012 5000",
//     mainCardAccountBalance: 95409,
//     mainSavingsAccountNumber: "9876 5432 1098 7664",
//     mainSavingsAccountBalance: 88591,
//     euroAccountNumber: "1111 2222 3333 3569",
//     euroAccountBalance: 104449,
//     dollarAccountNumber: "5555 6666 7777 4648",
//     dollarAccountBalance: 70475,
//     rubleAccountNumber: "9999 0000 1111 5792",
//     rubleAccountBalance: 87187,
//   },
//   {
//     id: 70,
//     firstName: "User70",
//     lastName: "LastName70",
//     phoneNumber: "+1234567879",
//     mainCardAccountNumber: "1234 5678 9012 6770",
//     mainCardAccountBalance: 97929,
//     mainSavingsAccountNumber: "9876 5432 1098 4416",
//     mainSavingsAccountBalance: 63824,
//     euroAccountNumber: "1111 2222 3333 5035",
//     euroAccountBalance: 57174,
//     dollarAccountNumber: "5555 6666 7777 4513",
//     dollarAccountBalance: 5616,
//     rubleAccountNumber: "9999 0000 1111 2425",
//     rubleAccountBalance: 42892,
//   },
//   {
//     id: 71,
//     firstName: "User71",
//     lastName: "LastName71",
//     phoneNumber: "+1234567880",
//     mainCardAccountNumber: "1234 5678 9012 4539",
//     mainCardAccountBalance: 96638,
//     mainSavingsAccountNumber: "9876 5432 1098 1282",
//     mainSavingsAccountBalance: 19658,
//     euroAccountNumber: "1111 2222 3333 2345",
//     euroAccountBalance: 17391,
//     dollarAccountNumber: "5555 6666 7777 7522",
//     dollarAccountBalance: 20233,
//     rubleAccountNumber: "9999 0000 1111 2243",
//     rubleAccountBalance: 39948,
//   },
//   {
//     id: 72,
//     firstName: "User72",
//     lastName: "LastName72",
//     phoneNumber: "+1234567881",
//     mainCardAccountNumber: "1234 5678 9012 8348",
//     mainCardAccountBalance: 54766,
//     mainSavingsAccountNumber: "9876 5432 1098 2755",
//     mainSavingsAccountBalance: 52085,
//     euroAccountNumber: "1111 2222 3333 3170",
//     euroAccountBalance: 8098,
//     dollarAccountNumber: "5555 6666 7777 1641",
//     dollarAccountBalance: 79504,
//     rubleAccountNumber: "9999 0000 1111 8499",
//     rubleAccountBalance: 41731,
//   },
//   {
//     id: 73,
//     firstName: "User73",
//     lastName: "LastName73",
//     phoneNumber: "+1234567882",
//     mainCardAccountNumber: "1234 5678 9012 6980",
//     mainCardAccountBalance: 12,
//     mainSavingsAccountNumber: "9876 5432 1098 8944",
//     mainSavingsAccountBalance: 69944,
//   },
//   {
//     id: 74,
//     firstName: "User74",
//     lastName: "LastName74",
//     phoneNumber: "+1234567883",
//     mainCardAccountNumber: "1234 5678 9012 3853",
//     mainCardAccountBalance: 28393,
//     mainSavingsAccountNumber: "9876 5432 1098 7416",
//     mainSavingsAccountBalance: 44250,
//   },
//   {
//     id: 75,
//     firstName: "User75",
//     lastName: "LastName75",
//     phoneNumber: "+1234567884",
//     mainCardAccountNumber: "1234 5678 9012 7198",
//     mainCardAccountBalance: 43401,
//     mainSavingsAccountNumber: "9876 5432 1098 7803",
//     mainSavingsAccountBalance: 6300,
//   },
//   {
//     id: 76,
//     firstName: "User76",
//     lastName: "LastName76",
//     phoneNumber: "+1234567885",
//     mainCardAccountNumber: "1234 5678 9012 7122",
//     mainCardAccountBalance: 97275,
//     mainSavingsAccountNumber: "9876 5432 1098 3524",
//     mainSavingsAccountBalance: 15590,
//   },
//   {
//     id: 77,
//     firstName: "User77",
//     lastName: "LastName77",
//     phoneNumber: "+1234567886",
//     mainCardAccountNumber: "1234 5678 9012 7597",
//     mainCardAccountBalance: 10714,
//     mainSavingsAccountNumber: "9876 5432 1098 4153",
//     mainSavingsAccountBalance: 69138,
//   },
//   {
//     id: 78,
//     firstName: "User78",
//     lastName: "LastName78",
//     phoneNumber: "+1234567887",
//     mainCardAccountNumber: "1234 5678 9012 8687",
//     mainCardAccountBalance: 99536,
//     mainSavingsAccountNumber: "9876 5432 1098 6242",
//     mainSavingsAccountBalance: 102618,
//     euroAccountNumber: "1111 2222 3333 1128",
//     euroAccountBalance: 63956,
//     dollarAccountNumber: "5555 6666 7777 9260",
//     dollarAccountBalance: 41106,
//     rubleAccountNumber: "9999 0000 1111 9599",
//     rubleAccountBalance: 5676,
//   },
//   {
//     id: 79,
//     firstName: "User79",
//     lastName: "LastName79",
//     phoneNumber: "+1234567888",
//     mainCardAccountNumber: "1234 5678 9012 7486",
//     mainCardAccountBalance: 40766,
//     mainSavingsAccountNumber: "9876 5432 1098 4951",
//     mainSavingsAccountBalance: 75490,
//     euroAccountNumber: "1111 2222 3333 7244",
//     euroAccountBalance: 40665,
//     dollarAccountNumber: "5555 6666 7777 8948",
//     dollarAccountBalance: 41488,
//     rubleAccountNumber: "9999 0000 1111 4678",
//     rubleAccountBalance: 18002,
//   },
//   {
//     id: 80,
//     firstName: "User80",
//     lastName: "LastName80",
//     phoneNumber: "+1234567889",
//     mainCardAccountNumber: "1234 5678 9012 3741",
//     mainCardAccountBalance: 53490,
//     mainSavingsAccountNumber: "9876 5432 1098 5458",
//     mainSavingsAccountBalance: 69009,
//   },
//   {
//     id: 81,
//     firstName: "User81",
//     lastName: "LastName81",
//     phoneNumber: "+1234567890",
//     mainCardAccountNumber: "1234 5678 9012 7553",
//     mainCardAccountBalance: 74544,
//     mainSavingsAccountNumber: "9876 5432 1098 7741",
//     mainSavingsAccountBalance: 56239,
//   },
//   {
//     id: 82,
//     firstName: "User82",
//     lastName: "LastName82",
//     phoneNumber: "+1234567891",
//     mainCardAccountNumber: "1234 5678 9012 6024",
//     mainCardAccountBalance: 103273,
//     mainSavingsAccountNumber: "9876 5432 1098 2475",
//     mainSavingsAccountBalance: 51262,
//   },
//   {
//     id: 83,
//     firstName: "User83",
//     lastName: "LastName83",
//     phoneNumber: "+1234567892",
//     mainCardAccountNumber: "1234 5678 9012 7872",
//     mainCardAccountBalance: 95781,
//     mainSavingsAccountNumber: "9876 5432 1098 4278",
//     mainSavingsAccountBalance: 7333,
//   },
//   {
//     id: 84,
//     firstName: "User84",
//     lastName: "LastName84",
//     phoneNumber: "+1234567893",
//     mainCardAccountNumber: "1234 5678 9012 3325",
//     mainCardAccountBalance: 19913,
//     mainSavingsAccountNumber: "9876 5432 1098 8608",
//     mainSavingsAccountBalance: 48098,
//   },
//   {
//     id: 85,
//     firstName: "User85",
//     lastName: "LastName85",
//     phoneNumber: "+1234567894",
//     mainCardAccountNumber: "1234 5678 9012 5844",
//     mainCardAccountBalance: 98065,
//     mainSavingsAccountNumber: "9876 5432 1098 5606",
//     mainSavingsAccountBalance: 65639,
//     dollarAccountNumber: "5555 6666 7777 5518",
//     dollarAccountBalance: 0,
//   },
//   {
//     id: 86,
//     firstName: "User86",
//     lastName: "LastName86",
//     phoneNumber: "+1234567895",
//     mainCardAccountNumber: "1234 5678 9012 3403",
//     mainCardAccountBalance: 43409,
//     mainSavingsAccountNumber: "9876 5432 1098 1144",
//     mainSavingsAccountBalance: 0,
//     dollarAccountNumber: "5555 6666 7777 6407",
//     dollarAccountBalance: 0,
//     rubleAccountNumber: "9999 0000 1111 2925",
//     rubleAccountBalance: 0,
//   },
//   {
//     id: 87,
//     firstName: "User87",
//     lastName: "LastName87",
//     phoneNumber: "+1234567896",
//     mainCardAccountNumber: "1234 5678 9012 8776",
//     mainCardAccountBalance: 91300,
//     mainSavingsAccountNumber: "9876 5432 1098 2502",
//     mainSavingsAccountBalance: 44703,
//     euroAccountNumber: "1111 2222 3333 6884",
//     euroAccountBalance: 26487,
//     dollarAccountNumber: "5555 6666 7777 2079",
//     dollarAccountBalance: 65319,
//   },
//   {
//     id: 88,
//     firstName: "User88",
//     lastName: "LastName88",
//     phoneNumber: "+1234567897",
//     mainCardAccountNumber: "1234 5678 9012 6646",
//     mainCardAccountBalance: 63844,
//     mainSavingsAccountNumber: "9876 5432 1098 5945",
//     mainSavingsAccountBalance: 0,
//     euroAccountNumber: "1111 2222 3333 4947",
//     euroAccountBalance: 42310,
//     dollarAccountNumber: "5555 6666 7777 8489",
//     dollarAccountBalance: 0,
//   },
//   {
//     id: 89,
//     firstName: "User89",
//     lastName: "LastName89",
//     phoneNumber: "+1234567898",
//     mainCardAccountNumber: "1234 5678 9012 5993",
//     mainCardAccountBalance: 98653,
//     mainSavingsAccountNumber: "9876 5432 1098 4975",
//     mainSavingsAccountBalance: 0,
//     euroAccountNumber: "1111 2222 3333 3655",
//     euroAccountBalance: 27253,
//     dollarAccountNumber: "5555 6666 7777 2560",
//     dollarAccountBalance: 79268,
//     rubleAccountNumber: "9999 0000 1111 8297",
//     rubleAccountBalance: 0,
//   },
//   {
//     id: 90,
//     firstName: "User90",
//     lastName: "LastName90",
//     phoneNumber: "+1234567899",
//     mainCardAccountNumber: "1234 5678 9012 1899",
//     mainCardAccountBalance: 24349,
//     mainSavingsAccountNumber: "9876 5432 1098 3183",
//     mainSavingsAccountBalance: 13,
//     euroAccountNumber: "1111 2222 3333 1457",
//     euroAccountBalance: 93894,
//     dollarAccountNumber: "5555 6666 7777 4151",
//     dollarAccountBalance: 61973,
//     rubleAccountNumber: "9999 0000 1111 9112",
//     rubleAccountBalance: 94527,
//   },
//   {
//     id: 91,
//     firstName: "User91",
//     lastName: "LastName91",
//     phoneNumber: "+12345678100",
//     mainCardAccountNumber: "1234 5678 9012 7923",
//     mainCardAccountBalance: 69019,
//     mainSavingsAccountNumber: "9876 5432 1098 6447",
//     mainSavingsAccountBalance: 33791,
//     euroAccountNumber: "1111 2222 3333 6417",
//     euroAccountBalance: 30290,
//     dollarAccountNumber: "5555 6666 7777 4026",
//     dollarAccountBalance: 36887,
//     rubleAccountNumber: "9999 0000 1111 5582",
//     rubleAccountBalance: 81231,
//   },
//   {
//     id: 92,
//     firstName: "User92",
//     lastName: "LastName92",
//     phoneNumber: "+12345678101",
//     mainCardAccountNumber: "1234 5678 9012 7443",
//     mainCardAccountBalance: 0,
//     mainSavingsAccountNumber: "9876 5432 1098 1320",
//     mainSavingsAccountBalance: 0,
//     dollarAccountNumber: "5555 6666 7777 2604",
//     dollarAccountBalance: 38015,
//     rubleAccountNumber: "9999 0000 1111 6975",
//     rubleAccountBalance: 9632,
//   },
//   {
//     id: 93,
//     firstName: "User93",
//     lastName: "LastName93",
//     phoneNumber: "+12345678102",
//     mainCardAccountNumber: "1234 5678 9012 4987",
//     mainCardAccountBalance: 81465,
//     mainSavingsAccountNumber: "9876 5432 1098 1046",
//     mainSavingsAccountBalance: 87299,
//     euroAccountNumber: "1111 2222 3333 2196",
//     euroAccountBalance: 47563,
//     dollarAccountNumber: "5555 6666 7777 6570",
//     dollarAccountBalance: 7071,
//     rubleAccountNumber: "9999 0000 1111 6656",
//     rubleAccountBalance: 69126,
//   },
//   {
//     id: 94,
//     firstName: "User94",
//     lastName: "LastName94",
//     phoneNumber: "+12345678103",
//     mainCardAccountNumber: "1234 5678 9012 2308",
//     mainCardAccountBalance: 99903,
//     mainSavingsAccountNumber: "9876 5432 1098 7229",
//     mainSavingsAccountBalance: 92041,
//     euroAccountNumber: "1111 2222 3333 4373",
//     euroAccountBalance: 6804,
//     dollarAccountNumber: "5555 6666 7777 4787",
//     dollarAccountBalance: 104066,
//     rubleAccountNumber: "9999 0000 1111 1218",
//     rubleAccountBalance: 90728,
//   },
//   {
//     id: 95,
//     firstName: "User95",
//     lastName: "LastName95",
//     phoneNumber: "+12345678104",
//     mainCardAccountNumber: "1234 5678 9012 3799",
//     mainCardAccountBalance: 96850,
//     mainSavingsAccountNumber: "9876 5432 1098 7219",
//     mainSavingsAccountBalance: 0,
//     euroAccountNumber: "1111 2222 3333 4748",
//     euroAccountBalance: 53388,
//     dollarAccountNumber: "5555 6666 7777 6958",
//     dollarAccountBalance: 89257,
//     rubleAccountNumber: "9999 0000 1111 8587",
//     rubleAccountBalance: 0,
//   },
//   {
//     id: 96,
//     firstName: "User96",
//     lastName: "LastName96",
//     phoneNumber: "+12345678105",
//     mainCardAccountNumber: "1234 5678 9012 4792",
//     mainCardAccountBalance: 50609,
//     mainSavingsAccountNumber: "9876 5432 1098 5639",
//     mainSavingsAccountBalance: 31181,
//     euroAccountNumber: "1111 2222 3333 6983",
//     euroAccountBalance: 49195,
//     dollarAccountNumber: "5555 6666 7777 5213",
//     dollarAccountBalance: 36130,
//     rubleAccountNumber: "9999 0000 1111 6514",
//     rubleAccountBalance: 10328,
//   },
//   {
//     id: 97,
//     firstName: "User97",
//     lastName: "LastName97",
//     phoneNumber: "+12345678106",
//     mainCardAccountNumber: "1234 5678 9012 5970",
//     mainCardAccountBalance: 47564,
//     mainSavingsAccountNumber: "9876 5432 1098 7163",
//     mainSavingsAccountBalance: 81481,
//     euroAccountNumber: "1111 2222 3333 8215",
//     euroAccountBalance: 63209,
//     dollarAccountNumber: "5555 6666 7777 9457",
//     dollarAccountBalance: 70753,
//     rubleAccountNumber: "9999 0000 1111 6793",
//     rubleAccountBalance: 79334,
//   },
//   {
//     id: 98,
//     firstName: "User98",
//     lastName: "LastName98",
//     phoneNumber: "+12345678107",
//     mainCardAccountNumber: "1234 5678 9012 4102",
//     mainCardAccountBalance: 40986,
//     mainSavingsAccountNumber: "9876 5432 1098 3081",
//     mainSavingsAccountBalance: 100538,
//     euroAccountNumber: "1111 2222 3333 2638",
//     euroAccountBalance: 18144,
//     dollarAccountNumber: "5555 6666 7777 3567",
//     dollarAccountBalance: 10791,
//     rubleAccountNumber: "9999 0000 1111 3697",
//     rubleAccountBalance: 42730,
//   },
//   {
//     id: 99,
//     firstName: "User99",
//     lastName: "LastName99",
//     phoneNumber: "+12345678108",
//     mainCardAccountNumber: "1234 5678 9012 5399",
//     mainCardAccountBalance: 49728,
//     mainSavingsAccountNumber: "9876 5432 1098 3516",
//     mainSavingsAccountBalance: 56429,
//     euroAccountNumber: "1111 2222 3333 6635",
//     euroAccountBalance: 53200,
//   },
//   {
//     id: 100,
//     firstName: "User100",
//     lastName: "LastName100",
//     phoneNumber: "+12345678109",
//     mainCardAccountNumber: "1234 5678 9012 2390",
//     mainCardAccountBalance: 400000,
//     mainSavingsAccountNumber: "9876 5432 1098 1859",
//     mainSavingsAccountBalance: 79713,
//     euroAccountNumber: "1111 2222 3333 3075",
//     euroAccountBalance: 0,
//     dollarAccountNumber: "5555 6666 7777 1265",
//     dollarAccountBalance: 0,
//     rubleAccountNumber: "9999 0000 1111 2230",
//     rubleAccountBalance: 0,
//   },
// ];

// const exchange = {
//   USD: {
//     buy: 401,
//     sell: 408,
//   },
//   EUR: {
//     buy: 434.5,
//     sell: 450.5,
//   },
//   RUB: {
//     buy: 4.34,
//     sell: 4.64,
//   },
// };

// function exchangeMoney(arr, exchange) {
//   let sum = 0;
//   let changedSum = 0;
//   for (let element of arr) {
//     sum += element.mainSavingsAccountBalance + element.mainCardAccountBalance;
//     if (element.dollarAccountBalance) {
//       changedSum += Math.floor(element.dollarAccountBalance * exchange.USD.buy);
//     }
//     if (element.euroAccountBalance) {
//       changedSum += Math.floor(element.euroAccountBalance * exchange.EUR.buy);
//     }
//     if (element.rubAccountBalance) {
//       changedSum += Math.floor(element.rubAccountBalance * exchange.RUB.buy);
//     }
//   }
//   return sum + changedSum;
// }

// console.log(exchangeMoney(bankUsers, exchange));

// function getUsersByBalans(arr, exchange) {
//   let sum = 0;
//   let changedSum = 0;
//   let totalSum = 0;
//   let usersByBalance = [];
//   for (let element of arr) {
//     sum = element.mainSavingsAccountBalance + element.mainCardAccountBalance;
//     if (element.dollarAccountBalance) {
//       changedSum = Math.floor(element.dollarAccountBalance * exchange.USD.buy);
//     }
//     if (element.euroAccountBalance) {
//       changedSum = Math.floor(element.euroAccountBalance * exchange.EUR.buy);
//     }
//     if (element.rubAccountBalance) {
//       changedSum = Math.floor(element.rubAccountBalance * exchange.RUB.buy);
//     }
//     totalSum = sum + changedSum;
//     if (totalSum > 300000 && totalSum <= 500000) {
//       usersByBalance.push(element);
//     }
//     sum = 0;
//     changedSum = 0;
//     totalSum = 0;
//   }

//   return usersByBalance;
// }

// console.log(getUsersByBalance(bankUsers, exchange));

// function statisticByAccount(arr) {
//   let dollarCount = 0;
//   let euroCount = 0;
//   let rubCount = 0;
//   let obj = {};
//   for (let element of arr) {
//     if (element.dollarAccountNumber) {
//       dollarCount++;
//     }
//     if (element.euroAccountNumber) {
//       euroCount++;
//     }
//     if (element.rubleAccountNumber) {
//       rubCount++;
//     }
//   }

//   obj.USD = arr.length / dollarCount / 100;
//   obj.EUR = (arr.length * euroCount) / 100;
//   obj.RUB = (arr.length * rubCount) / 100;
//   return obj;
// }

// console.log(statisticByAccount(bankUsers));

// const obj = {
//   name: "Arsen",
//   age: 26,
//   status: 200,
//   email:"gohar@mail.ru",
//   password:123456
// };

//karch dzevy

// function userDto(obj) {
//   const {name,surname, age} = user;
//   return {name,surname,age};
//
//   //erkar lucelu dzev

// //   const keys = Object.keys(obj);
// // const newObj = {};
// //   for(let i = 0; i < keys.length, i++) {
// //     // if(keys[i]=="name") {
// //     //   newObj.name = obj[keys[i]];
// //     // }
// //     // if(keys[i]=="age") {
// //     //   newObj.age = obj[keys[i]];
// //     // } if(keys[i]=="surname") {
// //     //   newObj.surname = obj[keys[i]];
// //     // }

// //     if(keys[i]=="name" || keys[i]=="surname" || keys[i]=="age") {
// //       newObj[keys[i]] = obj[keys[i]];
// //     }

// //   }
// }

// const obj = {
//   name: "Arsen",
//   age: 26,
//   status: 200,
//   email: "gohar@mail.ru",
//   password: 123456,
// };

// function filterObj(obj) {
//   const { password, email, ...rest } = obj;
//   return rest;
// }

// console.log(filterObj(obj));

// function getFirstThree(arr) {
//   const {a,b,c,...rest} = arr;
//   return rest
// }

// const users = [
//   {
//     id: 1,
//     username: "user1",
//     products: [
//       { id: 101, productName: "Product A", price: 20.99 },
//       { id: 102, productName: "Product B", price: 15.49 },
//       { id: 103, productName: "Product C", price: 8.99 },
//       { id: 104, productName: "Product D", price: 12.75 },
//       { id: 105, productName: "Product E", price: 30.0 },
//     ],
//   },
//   {
//     id: 2,
//     username: "user2",
//     products: [
//       { id: 201, productName: "Item X", price: 10.5 },
//       { id: 202, productName: "Item Y", price: 25.99 },
//       { id: 203, productName: "Item Z", price: 18.25 },
//       { id: 204, productName: "Gadget Q", price: 50.0 },
//       { id: 205, productName: "Accessory M", price: 7.99 },
//     ],
//   },
//   {
//     id: 3,
//     username: "user2",
//     products: [
//       { id: 301, productName: "Item X", price: 10.5 },
//       { id: 302, productName: "Item Y", price: 25.99 },
//       { id: 303, productName: "Item Z", price: 18.25 },
//       { id: 304, productName: "Gadget Q", price: 50.0 },
//       { id: 305, productName: "Accessory M", price: 7.99 },
//     ],
//   },
//   {
//     id: 4,
//     username: "user2",
//     products: [
//       { id: 401, productName: "Item X", price: 10.5 },
//       { id: 402, productName: "Item Y", price: 25.99 },
//       { id: 403, productName: "Item Z", price: 18.25 },
//       { id: 404, productName: "Gadget Q", price: 50.0 },
//       { id: 405, productName: "Accessory M", price: 7.99 },
//     ],
//   },
//   {
//     id: 5,
//     username: "user2",
//     products: [
//       { id: 501, productName: "Item X", price: 10.5 },
//       { id: 502, productName: "Item Y", price: 25.99 },
//       { id: 503, productName: "Item Z", price: 18.25 },
//       { id: 504, productName: "Gadget Q", price: 50.0 },
//       { id: 505, productName: "Accessory M", price: 7.99 },
//     ],
//   },
// ];

// function getProducts(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const [products] = arr;
//     newArr.push(...arr);
//   }
//   return newArr;
// }

// console.log(getProducts(users));

// function slice(arr, startIndex, endIndex) {
//   let newArr = [];
//   for (let i = startIndex; i <= endIndex; i++) {
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// console.log(slice(["sd", "d", "abs", "hh", "jnf", "jkmkm", "kkk"], 2, 5));

// let array = [1, 2, 4, 5, 88, 1, 2, 3, 4, 5, 88];

// function freeDoublicate(arr) {
//   let unique = [];
//   for(let i = 0; i< arr.length;i++) {
//     if (!unique.includes(arr[i])) {
//       unique.push(arr[i]);
//     }
//   }

//   return unique;
// }
// console.log(freeDoublicate(array));

// const users = [
//   {
//     id: 1,
//     name: "Eduard",
//     age: 17,
//     friends: [2, 4, 7, 9, 11, 12],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//     status: "",
//     email: "asdbaskjhsa03a87823672129@gmail.com",
//   },
//   {
//     id: 2,
//     name: "Karine",
//     age: 25,
//     friends: [1, 3, 4, 7, 9, 11],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//     status: "Dropped",
//     email: "asdbaskjh823anasdsd672129@gmail.com",
//   },
//   {
//     id: 3,
//     name: "Jon",
//     age: 14,
//     friends: [1, 2, 4, 7, 9],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//     status: "Activated",
//     email: "asdbaskjhsa8367212kjasd9@gmail.com",
//   },
//   {
//     id: 4,
//     name: "Bek",
//     age: 17,
//     friends: [2, 3, 7, 9],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//     status: "Activated",
//     email: "asdbaskjhs2367jvbasd2129@gmail.com",
//   },
//   {
//     id: 5,
//     name: "Abgar",
//     age: 20,
//     friends: [2, 4, 7, 9],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//     status: "Activated",
//     email: "asjbasd@gmail.com",
//   },
//   {
//     id: 6,
//     name: "Narek",
//     age: 25,
//     friends: [2, 4, 5, 7, 9, 12],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//     status: "Activated",
//     email: "kjansjn@gmail.com",
//   },
//   {
//     id: 7,
//     name: "David",
//     age: 25,
//     friends: [2, 4, 5, 6, 9],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//     status: "Activated",
//     email: "asdbaskjhsa8782sd36729@gmail.com",
//   },
//   {
//     id: 8,
//     name: "Eduard",
//     age: 16,
//     friends: [2, 12],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//     status: "Activated",
//     email: "asdbaasd823672129@gmail.com",
//   },
//   {
//     id: 9,
//     name: "Laura",
//     age: 25,
//     friends: [1, 6],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//     status: "Activated",
//     email: "asdbamkjaskjhsa878s23672129@gmail.com",
//   },
//   {
//     id: 10,
//     name: "Gexaznik",
//     age: 23,
//     friends: [4, 5, 7, 9, 11],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//     status: "Activated",
//     email: "asdbasvddss987823672129@gmail.com",
//   },
//   {
//     id: 11,
//     name: "Eduard",
//     age: 25,
//     friends: [1, 3, 4, 7, 9, 10],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//     status: "Dropped",
//     email: "asdbaskjhsa87alsd9238ss23672129@gmail.com",
//   },
//   {
//     id: 12,
//     name: "Eduard",
//     age: 21,
//     friends: [1, 2, 4, 7, 9, 11],
//     notifications: [],
//     posts: [],
//     requests: [],
//     massage: [],
//     status: "Dropped",
//     email: "asdbaskjhsa87823672129@gmail.com",
//   },
// ];

// function getActivatedUsers(users) {
//   return users
//     .filter((user) => user.status === "Activated")
//     .map(({ id, name, status, age }) => ({ id, name, status, age }));
// }

// console.log(getActivatedUsers(users));

// function getId(users) {
//   return users.map(({id}) => id)
// }

// console.log(getId(users));

// function getSeparateUsers(users) {

//   return {
//     adult: users.filter((item) => item.age > 18),
//     teenager: users.filter((item) => item.age < 18),
//   };
// }

// console.log(getSeparateUsers(users));

// function makeReverse(num) {
//   let a = 1;
//   let final = 0;
//   while (num >= 1) {
//     a = num % 10;
//     num = Math.floor(num / 10);
//     final = final*10+a;
//   }
//   return final;
// }

// console.log(makeReverse(568497412));

// let str = ")))((())))(())()))))()))())";
// function isSimetric(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "(") {
//       count++;
//     } else if (str[i] === ")") {
//       count--;
//     }
//     if (count === -1) {
//       return false;
//     }
//   }

//   return count === 0;
// }

// // console.log(isSimetric(str));

// function getRepeats(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === letter.toLowerCase()) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(getRepeats("hellLo", "l"));

// function newArr(arr) {
//   return arr.map((item) => ({ name: item, id: Math.floor(Math.random() * 10) }));
// }
// console.log(newArr(["N", "C", "A"]));

// function customOperation(arr, callback) {
//   return arr.map((item) => callback(item));
// }

// console.log(customOperation([1, 2, 3, 4], (item) => item * 2));

// let age = 15;
// const goo = () => {
//   console.log(age);
// };
// goo.age = 12;
// function l() {
//   let age = 9;
//   goo();
// }
// l();

// let b = 2 * a;
// let a = 17;
// console.log(b);

// let a = 5;
// let b = 4;
// let c = a <= b;
// c = a >= b;
// console.log(c);

// let a = true, b = !a;
// console.log(!!!b);

// let a = false, b = false;
// let c = a && b || a;
// console.log(c);

// let a = false, b = true;
// let c = a || (b && !b || !a);
// console.log(c);

// let a = 1;
// let b = a + 1;
// console.log(a / b);

// let a = 6 / 4;
// let b = 3;
// console.log(a + b);

// let a = 7;
// let b = 17.0;
// let c = true;
// c = c || a == b;
// console.log(c);

// let a = 17;
// let b = 6;
// if (a % b > 3) {
// console.log(Math.ceil(a / b));
// } else if (a % b == 5) {
// console.log(a % b);
// } else {
// console.log(a + b);
// }

// let a = 5;
// let b = 45;
// if (a > b) {
// if (b > a) {
// console.log(a + b);
// }
// } else {
// if (b < a) {
// console.log(b - a);
// }
// }


// let a = 5, b = 6;
// if (a > b) {
// console.log(1);
// } else if (!(a <= b)) {
// console.log(2);
// } else {
// console.log(3);
// }

// let a = 11, b = 3;
// if (a / b == 3) {
// console.log(3);
// } else {
// console.log(23);
// }

// let a = 4;
// switch (a) {
// case 3:
// a = 5;
// case 5:
// case 6:
// console.log(a * 2);
// case 4:
// console.log(a * 7);
// break;
// default:
// console.log(a);
// }

// let a = 6;
// switch (a) {
// case 3:
// console.log(a * 3);
// case 5:
// case 6:
// console.log(a * 5);
// case 4:
// console.log(a * 4);
// }

// let a = 5;
// let b = 7;
// switch (a) {
// case 5:
// console.log(a + b);
// a = 6;
// break;
// case 6:
// console.log(a - b);
// break;
// default:
// console.log(a * b);
// break;
// }

// let a = 5;
// switch (a) {
// case 5:
// console.log(55);
// switch (a) {
// case 6:
// console.log(33);
// break;
// default:
// console.log(77);
// break;
// }
// default:
// console.log(a);
// break;
// }

// for (let i = 9; i > 0; i = i - 1) {
//   console.log(i);
//   }
  
// for (let i = 0; i < 10; i = i + 1) {
//   console.log(i);
//   i = i + 1;
//   }

// function get() {
//   console.log(10);
//   }
//   get();

// function get2(a) {
//   if (a > 0) {
//   return true;
//   }
//   return a;
//   }
//   get2(10);
  
  
  // console.log(a);
  // var a = 10;

  console.log(Number(false)==0);
  
