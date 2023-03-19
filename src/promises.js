const todolist = require('./todolist')

//Define a function that gets all the todos from the 
// todolist array declared asynchronously after 2 seconds
getAllTodos = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            (todolist.length > 0) ? resolve(todolist) : reject('no todos yet');
        }, 2000);
    })
}
// Define a function to add a todo to the todolist array
createTodo = (todo) => {
   return new Promise((resolve,reject)=>{
      setTimeout(() => {
          (todo) ? resolve(todolist.push(todo)) : reject('No data to be added');
      })
   })
}
module.exports ={
    createTodo,getAllTodos
}