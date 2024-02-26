import React, { useReducer } from 'react';
import { TodoContext, TodoDispatchContext } from './TodoContext';

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
const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(reducer, [
        { id: 1, text: 'Todo 1' },
        { id: 2, text: 'Todo 2' },
        { id: 3, text: 'Todo 3' },
    ]);

    return (
        <TodoContext.Provider value={todos}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    );
};

export default TodoProvider;
