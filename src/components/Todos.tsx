import React from "react";
import Todo from "../models/todo";
import { TodoItem } from "./TodoItem";

export const Todos: React.FC<{ items: Todo[], deleteTodo: (id:string)=> void }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDeleteTodo={props.deleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
