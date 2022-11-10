import React from "react";
import { useState } from "react";
import arrow from './arrow.svg';
import userIcon from './user-avatar.svg'
import './Menu.css'

const Menu = () => {
    const [open, setOpen] = useState(false)

    return(
        <div className="menu_wrapper">
            <div className="menu_click" onClick={() => {setOpen(!open)}}>
                <img className="user_img" src={userIcon} alt='userIcon'></img>
                <img className={`user_img_arrow ${open? 'up' : 'down'}`} src={arrow} alt='arrow'></img>
            </div>
            <InputMenu className={`login_menu_open ${open? 'active' : 'inactive'}`} />
        </div>
    );
}

const InputMenu = (props) => {
    return(
        <div className={props.className}>
            <div className="login_field"></div>
            <nav className="login_menu">
                <ul>
                    <LoginInfo text={'Profile'} />
                    <LoginInfo text={'Log out'} />
                </ul>
            </nav>
        </div>
    );
}

const LoginInfo = (props) => {
    return(
        <li className="login_info">
            <a href="##">{props.text}</a>
        </li>
    );
}

export default Menu