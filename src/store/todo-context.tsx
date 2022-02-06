import Todo from "../models/todo";
import React, { useState } from "react";
type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  openForm: () => void;
  closeForm: () => void;
  isNewTodoFormVisible: boolean;
};
export const TodoContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: () => {},
  openForm: () => {},
  closeForm: () => {},
  removeTodo: (id: string) => {},
  isNewTodoFormVisible: false,
});

const TodoContextProvider: React.FC = (props) => {
  const [todos, settodos] = useState<Todo[]>([]);
  const [isFormVisible, setisFormVisible] = useState<boolean>(false);
  const addTodoHandler = (todoText: string) => {
    settodos((todo) => {
      return [...todo, new Todo(todoText)];
    });
    setisFormVisible(false);
  };

  const deleteTodoHandler = (id: string) => {
    settodos((todos) => {
      return todos.filter((t) => t.id !== id);
    });
  };

  const openForm = () => {
    setisFormVisible(true);
  };

  const closeForm = () => {
    setisFormVisible(false);
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler,
    openForm,
    closeForm,
    isNewTodoFormVisible: isFormVisible,
  };
  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
