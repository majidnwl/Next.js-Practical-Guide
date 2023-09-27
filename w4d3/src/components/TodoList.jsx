import React from "react";
import ListItem from "./ListItem";

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
    return (
        <ul id="myUL">
            {todos.map((todo) => (
                <ListItem
                    key={todo.id}
                    todo={todo}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
