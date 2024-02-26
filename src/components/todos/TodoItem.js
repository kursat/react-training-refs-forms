import React, { useContext } from 'react';
import { TodoContext, TodoDispatchContext } from '../../contexts/TodoContext';
import { Button } from '@nextui-org/react';

const TodoItem = ({ todo }) => {
    const todos = useContext(TodoContext);
    const dispatch = useContext(TodoDispatchContext);

    return (
        <div>
            {todo.text}
            <Button
                onClick={() => dispatch({ type: 'delete', payload: todo.id })}
            >
                Delete
            </Button>
        </div>
    );
};

export default TodoItem;
