import React from "react";
import {Link} from "react-router-dom";


export default function Menu() {

    return (
        <div className="menu">

            <Link to={'/Users/'}>Users</Link>
            <Link to={'/ToDo/'}>Todo</Link>
            <Link to={'/projects/'}>Projects</Link>

            <div className="menu-right">
                <Link to='/login/'>Login</Link>
            </div>
        </div>


    )
}


