import React from 'react';


const ProjectItem = ({project}) => {
    return (
        <tbody>
        <tr className="ProjectInfo">
            <td>{project.name}</td>
            <td>{project.users}</td>
            <td>{project.url}</td>
        </tr>
        </tbody>

    )
}


const ProjectList = ({projects}) => {
    return (
        <table className="ProjectTable">
            <tbody>
            <tr>
                <th>Name</th>
                <th>User Id</th>
                <th>URL</th>
            </tr>
            </tbody>
            {projects.map((project) => <ProjectItem project={project}/>)}
        </table>
    )
}
export default ProjectList;