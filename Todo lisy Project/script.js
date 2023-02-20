// ##Variable##

// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter.
// Names can also begin with $ and _ (but we will not use it in this tutorial).
// Names are case sensitive (y and Y are different variables).
// Reserved words (like JavaScript keywords) cannot be used as names.

// var message = 'hel'
// let message = 'helllo'
// difference between let and var

// ##Data Type##

// Number type - integer, float, Infinity, -Infinity, NaN
let number = 12;
12.3;

//   user = 'nandha';

//   console.log(user);

//   let user;
// let message = 'hgcv';
// let message = 'fghjk';

const amount = null;

// Big Int - use only if the number is above (2 power of 53) ,
let s = 10n;
console.log(typeof s);

// String - single, double, backtick .
// let number1 = 10;
// let number2 = 20;

//   let str = "sum of two numbers "+number1+" and "+number2+" = "+(number1
//       +number2);

//   let back = `sum of two nu
//   jdfbjv
//   jvhb

//   jhbvjdf

//   jkbdfv

//   mber ${number1} and ${number2} = ${number1+number2}`
//       console.log(str, back)
// Boolean - true, false.

// null - (reference to non existing object) nothing”, “empty” or “value unknown”..
// let x = null;
// undefined - “value is not assigned”.
// let xtr;
// console.log(xtr);
// Symbol

// Object
//  let personal_details = new Object();
//  personal_details.name = "nanadha";
//  personal_details.age=20;
//  console.log(personal_details);

//  let personal_detail = Object.freeze({
//      name:'nandha',
//      age:20,
//      college:'BIT'
//  });
//  const values = Object.entries(personal_detail);

//  console.log('personal_detail', values)

//   let name = 'name';

//   const personal_detail = Object.freeze( {
//     name: 'nandha',
//     age: 90,
//   });

//   personal_detail.address="coimbatore";
//   personal_detail["username"] = 'random@gmail.com'

//   delete personal_detail.address;
//   console.log(personal_detail);

//   const keys = Object.values(personal_detail);
//   console.log(keys);

//   const work = {
//     place: 'tirupur',
//     building_count: 2
//   }
//   const work_place = { ...work};
//    work_place.random = 12;
//   console.log(work, work_place)

//  for( let key in personal_detail){
//    console.log(key, personal_detail[key]);
//  }

//object creation
// add, remove.
// freeze, keys, values, entries
// object looping

// Task
//    let name = "Ilya";
//     alert( `hello ${1}` ); // ?
//     alert( `hello ${"name"}` ); // ?
//     alert( `hello ${name}` ); // ?

// ##Interactions##

// alert()

// prompt()

// confirm()

// Task

// ##Type Convertion##

// String type

// Number

// Boolean

// ##Operator##

// arithmetic operator - +,-,*,/,%,**, ++, --

// comparison operator ==, ===, >,<,>=,<=

// Conditional Operator ?:

// Logical operator ||, &&, |

// typeOf operator

// ##Loop##

// for

// while

// do while

// ##switch##

// ##function##

// int getEmail (char [] email) {
//   return 0;
// }

console.log(0 == false); // true
console.log(0 === false); // false

// function isValidaEmailId (customer) {
//    return customer.email === 'abc@gmail.com';
// }

const isValidaEmailId = (customer) => {
  const isValid = customer.email === "abc@gmail.com";
  return isValid;
};

const sum = (num1, num2) => {
  if (typeof num1 === "number" && typeof num2 === "number") return num1 + num2;

  return "Invalid numbers";
};

const coding_platform = {};

const setValue = (key, value) => {
  coding_platform[key] = value;
};

setValue("name", "nandha");
console.log(coding_platform);

const getName = (customer) => customer.name;
console.log(sum(10, 20));
console.log(sum("hello", 20));
console.log(sum("hello", "world"));

const customer = {
  name: "pradeep",
  email: "abc@gmail.com",
};

console.log("isValidaEmailId", isValidaEmailId(customer));

// ## Higher Order Function ##
const add = (num1, num2) => num1 + num2;

const multiply = (num1, num2) => num1 * num2;

const calculate = (num1, num2, opertionFn) => {
  return opertionFn(num1, num2);
};

const value = calculate(2, 20, multiply); // higher order function

console.log("Higher order function output", value);

// #array#

const str = [1, "string", { name: "someone" }, true];
console.log(str.length);

console.log(str[1].name);

const fruits = ["apple"];

// Insertion
fruits.push("banana"); // insert at last
fruits.unshift("carrot"); // insert at front.

// Deletion
const deleted_value = fruits.shift(); // deletes first element
fruits.pop(); // delete last element

console.log(fruits, deleted_value);

const values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// const comparator = (value) => value === 20;

const result = values.findIndex((value) => value === 20);
console.log(result);

const str_array = ["banana", "carrot", "apple", "mango"];
// str_array.splice(3,1);
// str_array.splice(1,0,"hello", 'world', 'Iam', 'Programmer');
str_array.splice(1, 1, "hello");
console.log(str_array);

const initial_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
output: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// map
const multipleOfFive = (item) => item * 5;
const result_array = initial_array.map(multipleOfFive);
console.log(result_array);

// ****************************

/**** */

const getNewUser = (username, email) => {
  const li = document.createElement("li");

  const usernameDiv = document.createElement("div");
  usernameDiv.classList.add("username");
  usernameDiv.innerText = username;

  li.append(usernameDiv);

  const emailDiv = document.createElement("div");
  emailDiv.classList.add("email");
  emailDiv.innerText = email;

  li.append(emailDiv);

  return li;
};

const usernameNode = document.getElementById("username");
const emailNode = document.getElementById("email");

const form = document.getElementById("add-user");
const ul = document.getElementById("user-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = usernameNode.value;
  const email = emailNode.value;

  const newUser = getNewUser(username, email);
  console.log("data", {
    username,
    email,
    newUser,
  });
  ul.append(newUser);
  usernameNode.value = "";
  emailNode.value = "";
});

let todo = {
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false,
};
console.log(todo);

// let title = todo.title;
let { title: todo_title } = todo;

// let { title: todo_title } = todo;
// let todo_title = todo.title;
console.log(todo_title);

// Array destructuring

const arr = ["string", 10, 100, 200, { name: "fgcvjhb" }, () => 0];

// let str_value = arr[0];
// let num_value = arr[1];

let [a, b, c, d, e, f] = arr;
// let f = () => 0;
console.log(f());
console.log({ a, b, c, d, e, f });

//******************************* */
import getUsername, {
  getCompletedTodoItems as geti,
  TODO_LIST,
} from "./utilities.js";
console.log(TODO_LIST);
