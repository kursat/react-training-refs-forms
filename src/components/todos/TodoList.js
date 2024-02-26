import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../../contexts/TodoContext';

const TodoList = () => {
    const todos = useContext(TodoContext);

    // const {email, role} = useContext(UserContext);

    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
