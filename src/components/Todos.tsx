import React, { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { TodoContext } from "../store/todo-context";

export const Todos: React.FC = () => {
  const todoContext = useContext(TodoContext);
  return (
    <ul>
      {todoContext.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDeleteTodo={todoContext.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
