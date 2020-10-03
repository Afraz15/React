import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, setTodos}) => {

    return(
        <dir>
            <ul>
                {todos.map(todo => (
                    <Todo setTodos={setTodos} todo={todo} todos={todos}  key={todo.id} text={todo.text} /> 
                ))}
            </ul>
        </dir>        
    )
}

export default TodoList;
