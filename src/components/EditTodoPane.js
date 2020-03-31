import React, { useState } from 'react';
import TodoItemDetails from './TodoItemDetails';

export default function EditTodoPane({todo, onTodoSave}) {
    const [text, setTextValue] = useState(todo.text);

    const saveTodo = () => {
        const data = {text}
        if (todo.id && todo.id !== '' && todo.id !== 0) {
            data.id = todo.id
        }

        onTodoSave(data);
    };

    const handleChange = (event) => {
        setTextValue(event.target.value);
    };

    return (<div className="edit-item-pane-cntr">
        <div>
            <input type="text" value={text} onChange={handleChange} />
        </div>

        <TodoItemDetails todo={todo} />

        <div className="bottom-btn-cntr">
            <button onClick={saveTodo}>save</button>
        </div>
    </div>)
}
