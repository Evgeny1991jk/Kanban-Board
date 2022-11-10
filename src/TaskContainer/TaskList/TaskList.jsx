import React, { useState } from "react";
import SelectTask from "../../Forms/SelectTask/SelectTask";
import ToDoTask from "../../Forms/ToDoTask/ToDoTask";
import { MarkType } from "../../MarksData/Marks";
import {Link} from 'react-router-dom';
import './TaskList.css';

const TaskList = (props) => {

    const {type, toDo, setToDo, title, addToDo, moveToDo, prevTaskList} = props

    const [formOpen, setFormOpen] = useState(false)

    const disabled = prevTaskList.length === 0 ? true : false

    const initialValue = {
        title: '',
        description: '',
    }

    const [value, setValue] = useState(initialValue)

    const handleAddNewClick = () => {
        setFormOpen(!formOpen)
    }

    const formSubmit = (title) => {
        addToDo(title)
        setFormOpen(false)
        setValue(initialValue)
    }

    const selectChange = (id, type) => {
        moveToDo(id, type)
        setFormOpen(false)
    }

    return(
        <div className="taskList">
            <h1 className="taskList_title">
                {title}
            </h1>
            <nav className="board">
                {toDo.map(task => (
                    <Link className='board_link' to={`/tasks${task.id}`} key={task.id}>
                      <li className="board_li" key={task.id}>
                        {task.title}
                      </li>
                    </Link>
                ))}
            </nav>

            {type === MarkType && formOpen && (
                <ToDoTask
                  value={value}
                  setValue={setValue}
                  formOpen={FormOpen}
                  formSubmit={formSubmit}
                />
            )}

            {type !== MarkType && formOpen && (
                <SelectTask
                  toDo={toDo}
                  type={type}
                  prevTaskList={prevTaskList}
                  setFormOpen={setFormOpen}
                  value={value}
                  setValue={setValue}
                  setToDo={setToDo}
                  selectChange={selectChange}
                />
            )}

            {type === MarkType && <button
              className={`addButton ${formOpen ? 'inactive' : 'active'}`}
              onClick={handleAddNewClick}>
                + Add card
              </button>
            }

            {type !== MarkType && <button
            className={`addButton ${formOpen ? 'inactive' : 'active'}`}
            disabled={disabled}
            onClick={handleAddNewClick}>
                + Add card
            </button>
            }
        </div>
    );
}

export default TaskList