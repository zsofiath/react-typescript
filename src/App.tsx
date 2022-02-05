import { Box, Container, Link, Typography } from "@mui/material";
import { NewTodo } from "./components/NewTodo";
import { Title } from "./components/Title";
import { Todos } from "./components/Todos";
import TodoContextProvider from "./store/todo-context";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example
        </Typography>
        <TodoContextProvider>
          <Title>Todos</Title>
          <NewTodo />
          <Todos />
        </TodoContextProvider>
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
