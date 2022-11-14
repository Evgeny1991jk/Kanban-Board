import React from "react";
import './SelectTask.css';

const SelectTask = (props) => {

    const {prevTaskList, type, setToDo, selectChange, setValue} = props

    const handleSelectChange = (e) => {
        
        let task = null;

        if (e.target.selectedIndex > 0) {
            task = prevTaskList[e.target.selectedIndex - 1]
            selectChange(task.id, type)
        }
    }

    return(
        <form className="selectTask">
            <select className="select" onChange={handleSelectChange} defaultValue={'DEFAULT'}>
                <option className="option" disabled value='DEFAULT'>
                    Select Task
                </option>
                {prevTaskList.map((task) => {
                    return <option className="option" key={task.id}>
                        {task.title}
                    </option>
                })}
            </select>
        </form>
    );
}

export default SelectTask