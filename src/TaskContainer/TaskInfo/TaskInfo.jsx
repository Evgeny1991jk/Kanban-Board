import React, { useState } from "react";
import { Link, useParams} from 'react-router-dom';
import './TaskInfo.css';

const TaskInfo = (props) => {

    const params = useParams()
    const taskList = JSON.parse(localStorage.getItem('toDo'))
    const task = taskList.find((task) => task.id === params.taskId)

    const [description, setDescription] = useState(task && task.description.length > 0 ? task.description : 'This task has no description')

    const handleFocus = () => {
        if (description === 'This task has no description') {
            setDescription('')
        }
    }

    const handleExitClick = () => {
        const newTaskList = taskList.map(t => {
            if (t.id === task.id) {
                t.description = description === 'This task has no description' ? '' : description
            }
            return t
        })
        window.localStorage.setItem('toDo', JSON.stringify(newTaskList))
    }

    return(
        <div className="taskInfo">
            <div className="taskInfo_wrapper">
                <div className="taskInfo_title">
                    {task.title}
                </div>
                <textarea className="taskInfo_description" onChange={(e) => setDescription(e.target.value)} value={value} onFocus={handleFocus} />
            </div>
            <Link to='/' onClick={handleExitClick}>
                <div className="taskInfo_exit" />
            </Link>
        </div>
    );
}

export default TaskInfo