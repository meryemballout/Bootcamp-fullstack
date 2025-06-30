import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <div style={{ margin: "20px" }}>
        <h1>Todo List avec React + Redux</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
