import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "./redux/slices";

const App = () => {
  const [text, setText] = useState("");
  const [updateId, setUpdateId] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateId) {
      dispatch(updateTodo({ id: updateId, text: text }));
      setUpdateId(null);
    } else {
      dispatch(addTodo(text));
    }
    setText("");
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const setUpdate = (updateId) => {
    setUpdateId(updateId);
    document.getElementById("inputText").focus();
  };

  const todoList = useSelector((state) => state.todos);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "40px 20px",
      }}
    >
      <form onSubmit={handleSubmit} style={{ marginBottom: 10 }}>
        <input
          id="inputText"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">{updateId ? "Update" : "Add"}</button>
      </form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "start",
          width: "200px",
        }}
      >
        {todoList &&
          todoList
            ?.filter((todo) => todo.text !== "")
            .map((todo) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                key={todo.id}
              >
                <span id={todo?.id}>{todo?.text}</span>
                <button onClick={() => setUpdate(todo?.id)}>Update</button>
                <button onClick={() => handleRemove(todo?.id)}>X</button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default App;
