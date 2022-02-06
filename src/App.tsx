import { Badge, Box, Container, Grid, Link, Typography } from "@mui/material";
import { Header } from "./components/Header";
import { NewTodo } from "./components/NewTodo";
import { Title } from "./components/Title";
import { Todos } from "./components/Todos";
import { BasicModal } from "./components/UI/BasicModal";
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
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App example
          </Typography>
          <TodoContextProvider>
            <Title>Todos</Title>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Badge badgeContent="!" color="error">
                  <BasicModal>
                    <NewTodo />
                  </BasicModal>
                </Badge>
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
