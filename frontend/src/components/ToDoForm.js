import React from "react";


class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {project: [], text: '', creator: []}
    }


    handleToDoChange(event) {
        if (!event.target.selectedOptions) {
            this.setState({
                'project': [],
                'creator': []
            })
            return;
        }

        let projects = []
        for (let i = 0; i < event.target.selectedOptions.length; i++) {
            projects.push(event.target.selectedOptions.item(i).value)

        }
        let creators = []
        for (let i = 0; i < event.target.selectedOptions.length; i++) {
            creators.push(event.target.selectedOptions.item(i).value)

        }
        this.setState({
            'project': projects,
            'creator': creators
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
        this.props.createProject(this.state.project, this.state.text, this.state.creator)
        event.preventDefault()
    }


    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>

                <div className="form-group">
                    <label htmlFor="login">Text</label>
                    <input type="text" className="form-control" name="text" value={this.state.text}
                           onChange={(event) => this.handleChange(event)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="project">Project</label>
                    <input type="text" className="form-control" name="project" value={this.state.project}
                           onChange={(event) => this.handleChange(event)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="creator">Creator</label>
                    <input type="text" className="form-control" name="creator" value={this.state.creator}
                           onChange={(event) => this.handleChange(event)}/>
                </div>

                {/*<select name="project" multiple onChange={(event) => this.handleToDoChange(event)}>*/}
                {/*    {this.props.projects.map((item) => <option value={item.id}> {item.name} </option>)}*/}

                {/*</select>*/}

                {/*<select name="creator" multiple onChange={(event) => this.handleToDoChange(event)}>*/}
                {/*    {this.props.users.map((item) => <option value={item.id}> {item.username} </option>)}*/}

                {/*</select>*/}


                <input type="submit" className="btn btn-primary" value="Save"/>
            </form>
        );

    }

}

export default ToDoForm