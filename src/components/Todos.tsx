import React, { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { TodoContext } from "../store/todo-context";
import { Grid } from "@mui/material";

export const Todos: React.FC = () => {
  const todoContext = useContext(TodoContext);
  return (
    <div>
      {/* <Grid container spacing={2}> */}
        {todoContext.items.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4}>
            <TodoItem
              text={item.text}
              onDeleteTodo={todoContext.removeTodo.bind(null, item.id)}
            />
          </Grid>
        ))}
      {/* </Grid> */}
    </div>
  );
};
