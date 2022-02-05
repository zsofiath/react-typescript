import React, { useState } from "react";
import { NewTodo } from "./components/NewTodo";
import { Todos } from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, settodos] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    settodos(todo => {
      return [...todo, new Todo(todoText)];
    });
  }
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
