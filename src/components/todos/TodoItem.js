import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';

const TodoItem = ({ todo }) => {
    const todos = useContext(TodoContext);

    console.log('todos', todos);

    return <div>{todo.text}</div>;
};

export default TodoItem;
