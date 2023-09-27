import React, { useState } from "react";

const AddItem = ({ addTodo }) => {
    const [text, setText] = useState("");
    return (
        <>
            <input
                type="text"
                placeholder="Title..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <span
                className="addBtn"
                onClick={() => {
                    addTodo(text);
                    setText("");
                }}
            >
                Add
            </span>
        </>
    );
};

export default AddItem;
