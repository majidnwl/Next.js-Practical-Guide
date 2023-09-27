import React from "react";

const ListItem = ({ todo, updateTodo, deleteTodo }) => {
    return (
        <li className={todo.completed ? "checked" : ""}>
            <span onClick={() => updateTodo(todo)}>{todo.title}</span>
            <span className="close" onClick={() => deleteTodo(todo.id)}>
                x
            </span>
        </li>
    );
};

export default ListItem;
