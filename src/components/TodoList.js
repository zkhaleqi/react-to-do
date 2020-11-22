import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos, setTodos, todo, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            key={todo.id}
            text={todo.text}
          ></Todo>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
