import React, { useState } from "react";

function Todo() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(null);

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const addTodo = () => {
        if (task.trim() === "") return; 
            const newTodo = { value: task, isCompleted: false, id: new Date().getTime() };
            setTodos([...todos, newTodo]);
       
        setTask("");
    };

    const handleKey = (e) => {
        if (e.key === "Enter") {
            addTodo();
        }
    };

    const removeTodo = (id) => {
        const filtered = todos.filter((t) => t.id !== id);
        setTodos(filtered);
    };

    const handleComplete = (id) => {
        const updatedTodos = todos.map((t) =>
            t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
        );
        setTodos(updatedTodos);
    };

    const handleEdit = (id) => {
        const todoToEdit = todos.find((t) => t.id === id);
        if (todoToEdit) {
            setTask(todoToEdit.value);
            setEditId(id); 
        }
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    value={task}
                    onChange={handleChange}
                    onKeyDown={handleKey}
                    placeholder="Add or edit a task"
                />
                <button onClick={addTodo}>{editId !== null ? "Update" : "Add"}</button>
            </div>
            <div>
                {todos.map((t) => {
                    return (
                        <div key={t.id} style={{ margin: "0.5rem" }}>
                            {t.isCompleted ? (
                                <span
                                    style={{
                                        marginRight: "2rem",
                                        textDecoration: "line-through",
                                    }}
                                >
                                    {t.value}
                                </span>
                            ) : (
                                <span style={{ marginRight: "2rem" }}>{t.value}</span>
                            )}
                            <span
                                onClick={() => handleComplete(t.id)}
                                style={{ marginRight: "1rem", cursor: "pointer" }}
                            >
                                ✔
                            </span>
                            <span
                                onClick={() => handleEdit(t.id)}
                                style={{ marginRight: "1rem", cursor: "pointer" }}
                            >
                                ✏
                            </span>
                            <span
                                onClick={() => removeTodo(t.id)}
                                style={{ cursor: "pointer" }}
                            >
                                ❌
                            </span>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Todo;
