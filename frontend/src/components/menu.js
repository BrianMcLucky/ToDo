import React from "react";



export default function Menu() {

    return (
        <div className="menu">

            <a href="http://localhost:3000/Users/">Users</a>
            <a href="http://localhost:3000/Todo/">Todo</a>
            <a href="http://localhost:3000/Projects/">Projects</a>


            <div className="menu-right">
                <a>
                    <input type="text" placeholder="Search.."/>
                    <button>Search</button>
                </a>
                <a href="http://localhost:3000/Login/">Login</a>
            </div>
        </div>


    )
}

