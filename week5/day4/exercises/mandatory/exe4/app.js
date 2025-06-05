// app.js

import { TodoList } from './todo.js';

const myList = new TodoList();

myList.addTask("Buy groceries");
myList.addTask("Do laundry");
myList.addTask("Read a book");

myList.markTaskComplete(1); 

myList.listTasks();
