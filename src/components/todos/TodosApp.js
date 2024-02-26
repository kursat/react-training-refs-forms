import React, { useState } from 'react';
import TodoList from './TodoList';
import { TodoContext } from '../../contexts/TodoContext';

const TodosApp = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Todo 1' },
        { id: 2, text: 'Todo 2' },
        { id: 3, text: 'Todo 3' },
    ]);

    return (
        <TodoContext.Provider value={todos}>
            <TodoList />
        </TodoContext.Provider>
    );
};

export default TodosApp;
