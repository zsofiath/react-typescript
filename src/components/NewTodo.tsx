import { Alert, Button, Input, Stack, TextField, Typography } from "@mui/material";
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
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>
    <form  onSubmit={submitHandler}>
      <TextField fullWidth size="small" id="text" label="Todo text" value={text} onChange={onChangeHandler}/>
      <Button fullWidth variant="contained" type='submit'>Add Todo</Button>

    </form>
    </>
  );
};
