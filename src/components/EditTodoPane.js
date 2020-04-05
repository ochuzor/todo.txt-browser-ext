import React, { useState } from 'react';
import TodoItemDetails from './TodoItemDetails';

export default function EditTodoPane({todo, onTodoSave, onClose}) {
    const [text, setTextValue] = useState(todo.text);

    const saveTodo = (event) => {
        event.preventDefault();
        if (!!text.trim()) {
            const data = {text}
            if (todo.id && todo.id !== '' && todo.id !== 0) {
                data.id = todo.id
            }
    
            onTodoSave(data);
        }
    };

    const handleChange = (event) => {
        setTextValue(event.target.value);
    };

    return (<form className="edit-item-pane-cntr" onSubmit={saveTodo}>
        <div>
            <input type="text" value={text} onChange={handleChange} />
        </div>

        <TodoItemDetails todo={todo} />

        <div className="bottom-btn-cntr">
            {!!onClose && <button type="button" onClick={onClose}>x</button>}
            <button type="submit">save</button>
        </div>
    </form>)
}
