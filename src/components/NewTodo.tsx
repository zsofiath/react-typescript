import { Button, Input, TextField, Typography } from "@mui/material";
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

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      settext(event.currentTarget.value);
  }

  return (
    <>
    <Typography mb={3} variant="h4">Create new todo</Typography>
    <form  onSubmit={submitHandler}>
      <TextField fullWidth size="small" id="text" label="Todo text" value={text} onChange={onChangeHandler}/>
      <Button fullWidth variant="contained" type='submit'>Add Todo</Button>

    </form>
    </>
  );
};
