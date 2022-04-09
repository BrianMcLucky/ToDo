import React from "react";

class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {project: '', text: '', creation_date: '', user: []}
    }


    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value

            }
        )
    }


    handleSubmit(event) {
        this.props.createToDo(this.state.project, this.state.text, this.state.creation_date, this.state.user)
        event.preventDefault()
    }


    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>

                <div className="form-group">
                    <label htmlFor="project">Project</label>
                    <input type="number" className="form-control" name="project" value={this.state.project}
                           onChange={(event) => this.handleChange(event)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="text">text</label>
                    <input type="text" className="form-control" name="text" value={this.state.text}
                           onChange={(event) => this.handleChange(event)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="creation_date">Creation date</label>
                    <input type="datetime-local" className="form-control" name="creation_date"
                           value={this.state.creation_date}
                           onChange={(event) => this.handleChange(event)}/>
                </div>

                 <div className="form-group">
                    <label htmlFor="user">Creator</label>
                    <input type="number" className="form-control" name="user"
                           value={this.state.user}
                           onChange={(event) => this.handleChange(event)}/>
                </div>


                <input type="submit" className="btn btn-primary" value="Save"/>
            </form>
        );

    }
}

export default ToDoForm

