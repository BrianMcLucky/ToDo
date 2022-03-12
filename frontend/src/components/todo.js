import React from 'react';
import {Link} from "react-router-dom";


const ToDoItem = ({item, deleteToDo}) => {
    return (
        <tbody>
        <tr className="ToDoInfo">
            <td>{item.project}</td>
            <td>{item.text}</td>
            <td>{item.creation_date}</td>
            <td>{item.update_date}</td>
            <td>{item.creator}</td>
            <td>
                <button onClick={() => deleteToDo(item.id)} type='button'>Delete</button>
            </td>
        </tr>
        </tbody>

    )
}


const ToDoList = ({items, deleteToDo}) => {
    return (
        <div>
            <table className="ToDoTable">
                <tbody>
                <tr>
                    <th>Project Id</th>
                    <th>Text</th>
                    <th>Creation date</th>
                    <th>Update date</th>
                    <th>Creator Id</th>
                </tr>
                </tbody>
                {items.map((item) => <ToDoItem item={item} deleteToDo={deleteToDo}/>)}
            </table>
            <button>
                <Link to='/ToDo/create/'>Create</Link>
            </button>

        </div>
    )
}
export default ToDoList;