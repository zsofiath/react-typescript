import React from 'react';
import Todo from '../models/todo';

export const TodoItem: React.FC<Partial<Todo>> = (props) => {
  return <li>{props.text}</li>;
};
