'use client';
import React, { useState } from 'react'
import "./TodoList.css";

const TodoList = () => {
    const [todos, setTodos] = useState<any[]>([])
    const [title, setTitle] = useState('');
    const addTodo = () => {
        const todo = { id: todos.length, name: title, isCompleted: false };

        if (title.length > 0) {
            setTodos(prev => {
                return [...prev, todo]
            })
            setTitle('');
        } else {
            alert('Title is Required!');
        }
    }
    const updateTodo = (id: any) => {
        setTodos(prev => {
            return prev.map(todo => {
                if (todo.id == id) {
                    return { ...todo, isCompleted: !todo.isCompleted };
                } else {
                    return todo;
                }
            });
        })
    }

    const deleteTodo = (id: any) => {
        setTodos(prev => {
            return prev.filter(todo => {
                return todo.id != id;
            });
        })
    }
    return (
        <>
            <div id="myDIV" className="header">
                <h2 style={{ margin: '5px' }}>My To Do List</h2>

                <input type="text" placeholder="Title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <span className="addBtn"
                    onClick={() => addTodo()}>Add</span>

            </div>

            <ul id="myUL">
                {todos.map((todo: any, key: any) => (
                    <li key={key}
                        className={todo.isCompleted ? 'checked' : ''}
                        onClick={() => updateTodo(todo.id)}
                    >{todo.name}
                        <span className='close'
                            onClick={() => deleteTodo(todo.id)}>x</span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList