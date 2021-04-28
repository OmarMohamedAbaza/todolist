import React from 'react'
import TodoForm from '../Components/Todos/TodoForm'
import Todos from '../Components/Todos/Todos'

const TodoList = () => {
    return (
        <main>
            <div className="container">
            <div className="todos">
                <TodoForm />
                <Todos />
            </div>
            
        </div>
        </main>
    )
}

export default TodoList
