import React from "react";


class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', user: [], url: ''}
    }


    handleProjectChange(event) {
        if (!event.target.selectedOptions) {
            this.setState({
                'user': []
            })
            return;
        }

        let users = []
        for (let i = 0; i < event.target.selectedOptions.length; i++) {
            users.push(event.target.selectedOptions.item(i).value)

        }
        this.setState({
            'user': users
        })
    }


    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value

            }
        )

    }


    handleSubmit(event) {
        this.props.createProject(this.state.name, this.state.user, this.state.url)
        event.preventDefault()
    }


    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" value={this.state.name}
                           onChange={(event) => this.handleChange(event)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="url">Url</label>
                    <input type="text" className="form-control" name="url" value={this.state.url}
                           onChange={(event) => this.handleChange(event)}/>
                </div>

                <select name="user" multiple onChange={(event) => this.handleProjectChange(event)}>
                    {this.props.users.map((item) => <option value={item.id}> {item.username} </option>)}

                </select>


                <input type="submit" className="btn btn-primary" value="Save"/>
            </form>
        );

    }

}


export default ProjectForm


