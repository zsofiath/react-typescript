import Todo from "../models/todo";
import React, { useState } from "react";
type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};
export const TodoContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC = (props) => {
  const [todos, settodos] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    settodos((todo) => {
      return [...todo, new Todo(todoText)];
    });
  };

  const deleteTodoHandler = (id: string) => {
    settodos((todos) => {
      return todos.filter((t) => t.id !== id);
    });
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler,
  };
  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
