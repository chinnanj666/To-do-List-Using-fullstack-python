import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  TextField,
  Button,
  Card,
  CardContent,
  useMediaQuery
} from "@mui/material";
import { FaTrashAlt } from "react-icons/fa";
import { styled, useTheme } from "@mui/material/styles";

const drawerWidth = 300;

// Styled main content
const Main = styled("main")(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(4),
  backgroundColor: "#f9fafc",
  minHeight: "100vh",
}));

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/todos")
      .then((res) => setTodos(res.data))
      .catch(console.error);
  }, []);

  const handleAdd = () => {
    if (!newTodo.trim()) return;
    axios.post("http://localhost:8000/todos", { task: newTodo, done: false })
      .then((res) => {
        setTodos([...todos, res.data]);
        setNewTodo("");
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/todos/${id}`).then(() => {
      setTodos(todos.filter((t) => t.id !== id));
      if (selectedTodo?.id === id) setSelectedTodo(null);
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            📝 My Todo App
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            padding: 2,
          },
        }}
      >
        <Toolbar />
        <TextField
          label="New Todo"
          variant="outlined"
          size="small"
          fullWidth
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          sx={{ mb: 1 }}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={handleAdd}
          sx={{ mb: 2 }}
        >
          Add Todo
        </Button>
        <Divider />
        <List dense>
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              button
              selected={selectedTodo?.id === todo.id}
              onClick={() => setSelectedTodo(todo)}
              secondaryAction={
                <IconButton edge="end" onClick={() => handleDelete(todo.id)}>
                  <FaTrashAlt />
                </IconButton>
              }
            >
              <ListItemText
                primary={todo.task}
                secondary={todo.done ? "✅ Done" : "🕒 Pending"}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Main>
        <Toolbar />
        {selectedTodo ? (
          <Card sx={{ maxWidth: 600, mx: "auto" }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Todo Details
              </Typography>
              <Typography>
                <strong>Task:</strong> {selectedTodo.task}
              </Typography>
              <Typography sx={{ mt: 1 }}>
                <strong>Status:</strong>{" "}
                {selectedTodo.done ? "✅ Completed" : "⏳ Pending"}
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <Typography variant="h6" color="textSecondary" align="center">
            Select a todo from the list
          </Typography>
        )}
      </Main>
    </Box>
  );
}

export default App;
