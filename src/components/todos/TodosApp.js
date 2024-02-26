import React, { useReducer, useState } from 'react';
import TodoList from './TodoList';
import { TodoContext, TodoDispatchContext } from '../../contexts/TodoContext';

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete':
            return state.filter((i) => i.id !== action.payload);
        default:
            return state;
    }
};

const TodosApp = () => {
    const [todos, dispatch] = useReducer(reducer, [
        { id: 1, text: 'Todo 1' },
        { id: 2, text: 'Todo 2' },
        { id: 3, text: 'Todo 3' },
    ]);

    return (
        <TodoContext.Provider value={todos}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoList />
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    );
};

export default TodosApp;
