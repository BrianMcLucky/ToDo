import React from "react";

class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {project: '', text: '', creation_date: '', creator: []}
    }


    handleAuthorChange(event) {
        if (!event.target.selectedOptions) {
            this.setState({
                'creator': []
            })
            return;
        }

        let creators = []
        for (let i = 0; i < event.target.selectedOptions.length; i++) {
            creators.push(event.target.selectedOptions.item(i).value)

        }
        this.setState({
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
        this.props.createToDo(this.state.project, this.state.text, this.state.creation_date, this.state.creator)
        event.preventDefault()
    }


    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>

                <div className="form-group">
                    <label htmlFor="login">project</label>
                    <input type="text" className="form-control" name="project" value={this.state.project}
                           onChange={(event) => this.handleChange(event)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="login">text</label>
                    <input type="text" className="form-control" name="text" value={this.state.text}
                           onChange={(event) => this.handleChange(event)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="login">Creation date</label>
                    <input type="datetime-local" className="form-control" name="creation_date"
                           value={this.state.creation_date}
                           onChange={(event) => this.handleChange(event)}/>
                </div>


                 <select name="creator" multiple onChange={(event) => this.handleAuthorChange(event)}>
                    {this.props.creator.map((item) => <option value={item.id}> {item.user} </option>)}

                </select>


                <input type="submit" className="btn btn-primary" value="Save"/>
            </form>
        );

    }
}

export default ToDoForm

