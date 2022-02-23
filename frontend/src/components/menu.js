import React from "react";
import {Link} from "react-router-dom";


export default function Menu() {
    return (
        <div className="menu">

            <Link to={'/'}>Users</Link>
            <Link to={'/ToDo/'}>Todo</Link>
            <Link to={'/projects/'}>Проект</Link>

            <div className="menu-right">
                <a href="#">Logout</a>
            </div>
        </div>


    )
}



