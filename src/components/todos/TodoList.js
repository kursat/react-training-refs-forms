import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext, TodoDispatchContext } from '../../contexts/TodoContext';
import { Button } from '@nextui-org/react';

const TodoList = () => {
    const todos = useContext(TodoContext);
    const dispatch = useContext(TodoDispatchContext);
    // const {email, role} = useContext(UserContext);

    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}

            <Button
                onClick={() =>
                    dispatch({
                        type: 'add',
                        payload: { id: Math.random(), text: 'New todo' },
                    })
                }
            >
                Add
            </Button>
        </div>
    );
};

export default TodoList;
