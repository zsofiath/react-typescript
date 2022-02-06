import React from 'react';
import Todo from '../models/todo';

export const TodoItem: React.FC<Partial<Todo> & {onDeleteTodo: ()=>void}> = (props) => {
  return <div>{props.text} <button onClick={props.onDeleteTodo}>Delete</button></div>;
};
