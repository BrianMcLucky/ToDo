import React from 'react';


const ToDoItem = ({item}) => {
    return (
        <tbody>
        <tr className="ToDoInfo">
            <td>{item.project}</td>
            <td>{item.text}</td>
            <td>{item.creation_date}</td>
            <td>{item.update_date}</td>
            <td>{item.creator}</td>
        </tr>
        </tbody>

    )
}


const ToDoList = ({items}) => {
    return (
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
            {items.map((item) => <ToDoItem item={item}/>)}
        </table>
    )
}
export default ToDoList;