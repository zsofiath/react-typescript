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

  const deleteTodoHandler = (id: string) => {
    settodos(todos => {
      return todos.filter(t => t.id !== id);
    });
  }
  
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos deleteTodo={deleteTodoHandler} items={todos} />
    </div>
  );
}

export default App;
