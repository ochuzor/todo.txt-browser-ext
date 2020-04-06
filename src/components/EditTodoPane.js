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
            <input type="text" value={text} onChange={handleChange} 
                placeholder="edit todo text...enter to save" />
        </div>

        <TodoItemDetails todoText={text} />

        <div className="bottom-btn-cntr">
            <button className="btn-save-todo" type="submit">
                <i className="fa fa-save"></i>
            </button>

            {!!onClose && <button type="button" className="btn-close" onClick={onClose}>
                    <i className="fa fa-times"></i>
                </button>}
        </div>
    </form>)
}
