import React from "react";
import Todo from "../models/todo";
import { TodoCard } from "./UI/TodoCard";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const TodoItem: React.FC<
  Todo & { onDeleteTodo: () => void }
> = (props) => {
  return (
    <TodoCard light={props.text.length%2 == 1}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.text}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.onDeleteTodo}>
          Delete
        </Button>
      </CardActions>
    </TodoCard>
  );
};
