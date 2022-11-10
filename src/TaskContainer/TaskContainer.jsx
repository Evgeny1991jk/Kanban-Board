import React from "react";
import { MarkType, MarkContainer } from "../MarksData/Marks";
import TaskList from "./TaskList/TaskList";
import { v4 as uuidv4 } from 'uuid';
import './TaskContainer.css';


const TaskContainer = (props) => {

    const {toDo, setToDo} = props

    const addToDo = (title) => {

        const task = {id: uuidv4(), title, description: '', type: MarkType.Backlog}
        setToDo([...toDo, task])
    }

    const moveToDo = (id, type) => {

        const newToDo = toDo.map(task => {
            task.type = task.id === id ? type : task.type
            return task
        })
        setToDo(newToDo)
    }

    return(
        <div className="task_container">
            {Object.values(MarkType).map(type => {
                const currentTask = toDo.filter(task => task.type === type)
                const prevTaskList = toDo.filter(task => task.type === type -1)

                return(
                    <TaskList
                      key={MarkContainer[type]}
                      title={MarkContainer[type]}
                      type={type}
                      addToDo={addToDo}
                      prevTaskList={prevTaskList}
                      moveToDo={moveToDo}
                      toDo={currentTask || []}
                    />
                )
            })}
        </div>
    );
}

export default TaskContainer