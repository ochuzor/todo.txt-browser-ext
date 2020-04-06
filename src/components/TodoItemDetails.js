import React from 'react';
import {textToIndexDto} from '@ochuzor/todo.txt-parser';

export default function TodoItemDetails({todoText}) {
    const todo = textToIndexDto(todoText);
    return (<div className="todo-item-details-cntr">
        {todo.description && <div>
            <span className="todo-details-heading">Description:</span>{' '}
            {todo.description}
        </div>}

        {todoText && todo.isCompleted && <div>
            <span className="todo-details-heading">Is Completed:</span>{' '}
            {todo.isCompleted}
        </div>}

        {todo.priority && <div>
            <span className="todo-details-heading">Priority:</span>{' '}
            {todo.priority}
        </div>}

        {(todo.dateOfCreation || todo.dateOfCompletion) && <div>
            {todo.dateOfCreation && <span>
                <span className="todo-details-heading">Date of Creation:</span>{' '}
                {todo.dateOfCreation}
            </span>}{' '}

            {todo.dateOfCompletion && <span>
                <span className="todo-details-heading">Date Completed:</span>{' '}
                {todo.dateOfCompletion}
            </span>}
        </div>}

        {todo.projects && <div>
            <span className="todo-details-heading">Projects:</span>{' '}
            {todo.projects}
        </div>}

        {todo.contexts && <div>
            <span className="todo-details-heading">Contexts:</span>{' '}
            {todo.contexts}
        </div>}

        {todo.tags && <div>
            <span className="todo-details-heading">Tags:</span>{' '}
            {todo.tags}
        </div>}
    </div>);
}
