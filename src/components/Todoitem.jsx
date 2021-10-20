import React from 'react'

export function Todoitem({todo, toggleTodo}) {
    const {id, task, completed} = todo;

    const handleTodoclick = () => {
        toggleTodo(id);
    }

    return <li>
        <input type="checkbox" checked={completed} onChange={handleTodoclick}/>
        {task}
        </li>
}
