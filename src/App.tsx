
import { NewTodo } from "./components/NewTodo";
import { Title } from "./components/Title";
import { Todos } from "./components/Todos";
import TodoContextProvider from "./store/todo-context";

function App() {
  
  return (
    <TodoContextProvider>
      <Title>Todos</Title>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
