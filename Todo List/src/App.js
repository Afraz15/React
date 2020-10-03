import React, { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import "./App.css"

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([])

    return(
        <div>
            <h1>Mr.Light's Todo list</h1>
            <Form todos={todos} inputText={inputText} setTodos={setTodos} setInputText={setInputText} />
            <TodoList setTodos={setTodos} todos={todos} />
        </div>
    )
}

export default App;
