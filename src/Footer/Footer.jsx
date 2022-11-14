import React from "react";
import { MarkType } from "../MarksData/Marks";
import './Footer.css';

const Footer = (props) => {

    const {toDo} = props

    const activeTasks = toDo.filter(task => task.type === MarkType.Backlog)

    const finishedTasks = toDo.filter(task => task.type === MarkType.Finished)

    return(
        <footer className="footer">
            <div className="footer_stat">
                <p className="stat">
                    Active tasks: {activeTasks.length}
                </p>
                <p className="stat">
                    Finished tasks: {finishedTasks.length}
                </p>
            </div>
            <div className="footer_author">
                <h1 className="stat">
                    Kanban Board By Evgenii Burkov, 2022
                </h1>
            </div>
        </footer>
    );
}

export default Footer