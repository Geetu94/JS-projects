// Function1, write a function addBtn which do sub tasks mention below
//  - get the input1 value whatever the user is enetering for task
//  - get the local storage values by getItem function if it is null create a new list or parse it after getting from local storage into normal list
//  - push the new task that you got from input1 and set that in localstorage by using setItem function
//  - and show all taks after adding with the new lsit that has all the todos by calling the function which is responsible for showing tasks

// Showtasks, write a function ShowTasks is which will do
//  - get the input1 value whatever the user is enetering for task
//  - get the todolist value where you want to save all the todos by writing
//  - get the footer value for writing the how many tasks that you have
//  - get the local storage values by getItem function if it is null create a new list or parse it after getting from local storage into normal list
//  - After getting all tods from localstorage we need to run a loop for creating a list of tasks that defines each task with a button of deeleteTodo. deleteTodo function which will take 1 parameter of the index of each task
//  - Update the todolist value with all lis that we made
//  - Update footer value with the total task that we have and say them that you have these many tasks todo
//  - and update the input1 value means that input box value should to empty


// Fucntion clearALl, which will do 
//  - clear all todos by emptying the localstorage values by using removeItem
//  - and update the footer value also to zero tasks because after deleting there are no tasks to do
//  - And no list items means not tasks need to show in web page


// Function deleteTodo, which takes 1 parameter of index value from the task and use that index to find the task and delete that task and show remaong tasks
