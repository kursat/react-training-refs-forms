import React from 'react';
import TodoList from './TodoList';
import TodoProvider from '../../contexts/TodoProvider';

const TodosApp = () => {
    return (
        <TodoProvider>
            <TodoList />
        </TodoProvider>
    );
};

export default TodosApp;
