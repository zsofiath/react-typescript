import React, { useContext } from 'react';
import { TodoContext } from '../store/todo-context';

export const Title: React.FC = (props) => {
    const context = useContext(TodoContext);    
  return <h1>{props.children} {context.items.length}</h1>;
};
