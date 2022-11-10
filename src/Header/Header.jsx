import React from "react";
import './Header.css';
import Menu from "./Menu/Menu";

const Header = () => {
    return(
        <header>
            <h1 className="header_title">
                Awesome Kanban Board
            </h1> 
            <Menu />
        </header>
    );
}

export default Header