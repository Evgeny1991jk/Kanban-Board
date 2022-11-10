import React from "react";
import './ToDoTask.css';

const ToDoTask = (props) => {
    
    const {formSubmit, formOpen, value, setValue} = props

    const handleChange = e => {
        const nameField = e.target.name
        setValue({...value, [nameField]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (value.title) {
            formSubmit(value.title, value.description)
        }
        formOpen(false)
    }

    return(
        <form className="taskList_add" onSubmit={handleSubmit}>
            <input
              className="taskList_input"
              type='text'
              name='title'
              placeholder='Add Task'
              onChange={handleChange}
              value={value.title}>
            </input>
            <button
                className="taskList_button"
                type="submit">
                    Submit
            </button>
        </form>
    );
}

export default ToDoTask