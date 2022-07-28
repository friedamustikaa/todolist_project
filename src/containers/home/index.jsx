import React from "react";
import TodoList from "../todoList/TodoList";

function index() {
  return (
    <div>
      <div className="bg-dark pt-5">
        <div className="container">
          <h1 className="text-center text-white mb-5">To-do List Project</h1>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default index;
