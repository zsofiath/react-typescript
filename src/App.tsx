import React from "react";
import { Todos } from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [
    new Todo('Muradin Bronzebeard'),
    new Todo('Arthat Menethil')
  ];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
