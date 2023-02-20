 export const TODO_LIST = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": true
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
      {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
      },
];

// export const getCompletedTodoList = () => {
//      return TODO_LIST.find((each_todo_item) => each_todo_item.completed === true)
// };

// export { getCompletedTodoList };
// export default getCompletedTodoList;


 const getCompletedTodoItems = () => {
    return TODO_LIST.filter((each_todo_item) => each_todo_item.completed === true);
};

 const add = () => 1+2;
 const subtract  = () => 10 - 9;

const getUsername = () => 'random';

export default getUsername;

export {getCompletedTodoItems, add, subtract};
// console.log(getCompletedTodoItems());
// export default getCompletedTodoItems;