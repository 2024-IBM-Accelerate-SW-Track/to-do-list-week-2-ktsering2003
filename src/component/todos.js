import React from "react";
import { Card, CardContent, ListItemButton, ListItemText, Checkbox } from "@mui/material";
import "../component/todos.css";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => (
      <Card key={todo.id} style={{ marginTop: 10 }}>
        <ListItemButton component="a" href="#simple-list">
          <Checkbox
            style={{ paddingLeft: 0 }}
            color="primary"
            onClick={() => deleteTodo(todo.id)}
          />
          <ListItemText
            primary={todo.content}
            secondary={todo.date}
          />
        </ListItemButton>
      </Card>
    ))
  ) : (
    <p>You have no todo's left</p>
  );

  return <div className="todoCollection" style={{ padding: "10px" }}>{todoList}</div>;
};

export default Todos;
