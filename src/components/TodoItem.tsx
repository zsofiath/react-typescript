import React from 'react';
import Todo from '../models/todo';

export const TodoItem: React.FC<Partial<Todo> & {onDeleteTodo: ()=>void}> = (props) => {
  return <li>{props.text} <button onClick={props.onDeleteTodo}>Delete</button></li>;
};
