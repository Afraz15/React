import React from 'react'

const Form = ({todos, inputText, setTodos, setInputText}) => {
    
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 32 }
        ])
        setInputText('')
    }
    return(
        <div>
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text"/>
                <button type='submit' onClick={submitTodoHandler}><i className='fa fa-plus-square'></i></button>
            </form>
        </div>
    )
}

export default Form;