import React from 'react';


const UserItem = ({user}) => {
    return (
        <tbody>
        <tr className="UserInfo">
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
        </tr>
        </tbody>

    )
}


const UserList = ({users}) => {
    return (
        <table className="UserTable">
            <tbody>
            <tr>
                <th>First name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
            </tbody>
            {users.map((user) => <UserItem user={user} />)}
        </table>
    )
}
export default UserList;