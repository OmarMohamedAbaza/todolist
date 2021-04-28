import React from 'react'
import FeatherIcon from 'feather-icons-react';

const TodoForm = () => {
    return (
        <div className="todos-form">
            <div className="todos-form_icon">
                <FeatherIcon icon="circle" />
            </div>
            <div className="todos-form_form">
                <input type="text" placeholder="Add new todo.." />
            </div>
            <div className="todos-form_submit">
                <button className="btn">
                    Add
                </button>
            </div>
        </div>
    )
}

export default TodoForm 