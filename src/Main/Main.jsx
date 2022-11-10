import React from "react";
import './Main.css';
import TaskContainer from '../TaskContainer/TaskContainer';
import TaskInfo from "../TaskContainer/TaskInfo/TaskInfo";
import { Route, Routes} from 'react-router-dom';

const Main = (props) => {
    const {toDo, setToDo} = props;

    return(
        <main className="main_wrapper">
            <Routes>
                <Route exact path={'/'} element={<TaskContainer toDo={toDo} setToDo={setToDo}/>} />
                <Route path={'/tasks/:taskId'} element={<TaskInfo toDo={toDo} setToDo={setToDo}/>} />
            </Routes>
        </main>
    );
}

export default Main