import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { Header } from "./components/Header";
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
    <>
    <Header></Header>
    <Container maxWidth="sm">
      <Title>Todos</Title>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example
        </Typography>
        <TodoContextProvider>
          <Grid container>
            <Grid item xs={12}>
              <NewTodo />
            </Grid>
            <Grid item xs={12}>
              <Todos />
            </Grid>
          </Grid>
        </TodoContextProvider>
        <Copyright />
      </Box>
    </Container>
    </>
  );
}

export default App;
