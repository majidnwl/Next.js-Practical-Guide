import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const apiUrl = `http://localhost:8000/todos`;
        setLoading(true);
        fetch(apiUrl, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((data) => {
                setTodos(data);
                setLoading(false);
            })
            .catch((error) => setLoading(false));
    }, []);

    const addTodo = (text) => {
        if (text.length > 0) {
            const todo = { id: new Date(), title: text, completed: false };
            const apiUrl = `http://localhost:8000/todos`;
            setLoading(true);
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(todo),
            })
                .then((response) => response.json())
                .then((data) => {
                    setTodos((prev) => {
                        return [...prev, data];
                    });
                    setLoading(false);
                })
                .catch((error) => setLoading(false));
        } else {
            alert("Title is Required!");
        }
        // if (text.length > 0) {
        //     setTodos((prev) => [
        //         ...prev,
        //         { id: new Date(), title: text, completed: false },
        //     ]);
        // } else {
        //     alert("Kindly Enter Title");
        // }
    };

    const updateTodo = (todo) => {
        const apiUrl = `http://localhost:8000/todos/${todo.id}`;
        setLoading(true);
        fetch(apiUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...todo, completed: !todo.completed }),
        })
            .then((response) => response.json())
            .then((data) => {
                // setTodos(prev => {
                //     return [...prev, data]
                // })
                setLoading(false);
            })
            .catch((error) => setLoading(false));
        setTodos((prev) =>
            prev.map((todoo) => {
                if (todoo.id == todo.id) {
                    return { ...todoo, completed: !todoo.completed };
                } else {
                    return todoo;
                }
            })
        );
    };

    const deleteTodo = (id) => {
        const apiUrl = `http://localhost:8000/todos/${id}`;
        setLoading(true);
        fetch(apiUrl, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                // setTodos(prev => {
                //     return [...prev, data]
                // })
                setLoading(false);
            })
            .catch((error) => setLoading(false));
        setTodos((prev) => prev.filter((todo) => todo.id != id));
    };

    return (
        <>
            <Header addTodo={addTodo} />
            {loading ? <h3>Loading....</h3> : <TodoList
                todos={todos}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
            />
    }
        </>
    );
}

export default App;
