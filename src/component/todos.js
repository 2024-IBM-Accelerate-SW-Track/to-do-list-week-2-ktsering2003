import React from "react";
import { Card, ListItemButton, ListItemText, Checkbox } from "@mui/material";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
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
      );
    })
  ) : (
    <p>You have no todo's left</p>
  );

  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;
