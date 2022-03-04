import React from 'react';
import UserList from "./components/user";
import axios from "axios";
import Footer from "./components/footer";
import Menu from "./components/menu";
import './css/footer-style.css'
import './css/menu-style.css'
import './css/user-style.css'
import './css/todo-style.css'
import './css/project-style.css'
import ToDoList from "./components/todo";
import ProjectList from "./components/project";
import {BrowserRouter, HashRouter, Switch, Route} from "react-router-dom";


const DOMAIN = 'http://127.0.0.1:8000/api/'
const get_url = (url) => `${DOMAIN}${url}`


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // navbarItems: [
            //     {name: 'Users', href: '/'},
            //     {name: 'Project', href: '/projects'},
            //     {name: 'ToDo', href: '/ToDo'},
            // ],
            users: [],
            items: [],
            projects: [],
        }
    }

    componentDidMount() {
        // const users = [
        //     {
        //         'first_name': 'User1firstname',
        //         'last_name': 'User1lastname',
        //         'username': 'User1username',
        //         'email': 'User1email'
        //     },
        //     {
        //         'first_name': 'User2firstname',
        //         'last_name': 'User2lastname',
        //         'username': 'User2username',
        //         'email': 'User2email'
        //     }
        // ]
        axios.get(get_url('users/')).then(response => {
            // const users = response.data
            this.setState({users: response.data})
        }).catch(error => console.log(error))

        axios.get(get_url('ToDo/')).then(response => {
            // const users = response.data
            this.setState({items: response.data})
        }).catch(error => console.log(error))

        axios.get(get_url('projects/')).then(response => {
            // const users = response.data
            this.setState({projects: response.data})
        }).catch(error => console.log(error))


    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <header>
                        <Menu>
                        </Menu>
                    </header>
                    <main>
                        <Switch>
                            <Route exact path='/'>
                                < UserList users={this.state.users}/>
                            </Route>
                            <Route exact path='/ToDo/'>
                                < ToDoList items={this.state.items}/>
                            </Route>
                            <Route exact path='/projects/'>
                                < ProjectList projects={this.state.projects}/>
                            </Route>
                        </Switch>
                    </main>
                    <Footer/>
                </BrowserRouter>
            </div>


        )

    }
}


export default App;


