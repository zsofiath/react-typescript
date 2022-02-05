import React, { useContext, useState } from "react";
import { TodoContext } from "../store/todo-context";

export const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  const [text, settext] = useState('');
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if(text?.trim().length === 0) {
        return;
    }

    todoCtx.addTodo(text);
    settext('');
  };

  const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
      settext(event.currentTarget.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input id="text" value={text} onChange={onChangeHandler}/>
      <button>Add Todo</button>

    </form>
  );
};
