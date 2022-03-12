import React from 'react';
import {Link} from "react-router-dom";


const ProjectItem = ({project, deleteProject, createProject}) => {
    return (
        <tbody>
        <tr className="ProjectInfo">
            <td>{project.name}</td>
            <td>{project.users}</td>
            <td>{project.url}</td>
            <td>
                <button onClick={() => deleteProject(project.id)} type='button'>Delete</button>
            </td>
        </tr>
        </tbody>

    )
}


const ProjectList = ({projects, deleteProject, createProject}) => {
    return (
        <div>
            <table className="ProjectTable">
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>User Id</th>
                    <th>URL</th>
                </tr>
                </tbody>
                {projects.map((project) => <ProjectItem project={project} deleteProject={deleteProject}
                                                        createProject={createProject}/>)}
            </table>
            <button>
                <Link to='/projects/create/'>Create</Link>
            </button>

        </div>
    )
}
export default ProjectList;