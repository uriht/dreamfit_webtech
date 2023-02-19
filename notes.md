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

const todo = [ {"user_id" : 1, "id": 111 , "title":"uriht",completed:true}, {"user_id" : 3, "id": 333 , "title":"kural",completed:false}, {"user_id" : 4, "id": 444 , "title":"selvan",completed:true}, {"user_id" : 2, "id": 222 , "title":"thiru",completed:false}, ]

//write a function to filter the above objct array basd on attribute 'completed:true'

const getCompletedTODOItem=() => { return todo.filter((todo_item) => todo_item.completed === true); };

console.log(getCompletedTODOItem())

---

DOM - Document Object Model

    -- represents in a tree structure
    -- javat point. info (refer here )

document.body.innerText='Varatta Maamey Durr';

//time out function

setTimeout( //takes two params ()=>{document.body.innerText="Okay Maamey Durr"; document.body.style.color='red'}, // ---> (param - 1) this is what to do ( We can addd more things to the function) 2000 //---> (param -2 )this is when to do )

//we can use innerhtml setTimeout( ()=>{document.body.innerHTML='<p style = "color:blue" >Varatta Chellaam</p>'}, 2000 )

setTimeout( ()=>{},

)

------------------------------------------------------ Event Listener -JS

// const body = document.getElementById('container'); console.log(body)

const button = document.getElementById('button') const pTag = document.getElementById('thiru')

button.addEventListener('click', (event) => { pTag.innerHTML = 'Enna Thottutaan'; })

button.addEventListener('mouseenter', (event) => { pTag.innerHTML = 'Venaam..thodatha'; })

//Syntax // button.addEventListener('ena event nadakanum', (antha event) => { // enna pannanum // })


