const arr = [ 'urihtae', 110, 18, { name: 'sujith', age: 100 }, () => 1 ] let str_name = arr[0] let str_num = arr[1] console.log(str_name) console.log(str_num) let [name,,, name2] = arr; console.log(name) console.log(name2)

---

new_obj = { name1: 'thiru', name2: 'kural', name3: 'selvan' }

console.log(new_obj.name1)

---

var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow","Mango", "Orange", "Red"];

// destructuring assignment  
var [a,b,c,...args] = colors;  
console.log(a);  
console.log(b);  
console.log(args); //remaining all elements in the array

---
