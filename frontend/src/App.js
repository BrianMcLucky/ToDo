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
import {BrowserRouter, HashRouter, Switch, Route, Link} from "react-router-dom";
import LoginForm from "./components/auth";
import Cookies from 'universal-cookie';
import project from "./components/project";
import ProjectForm from "./components/ProjectForm";
import ToDoForm from "./components/ToDoForm";


const DOMAIN = 'http://127.0.0.1:8000/api/'
const get_url = (url) => `${DOMAIN}${url}`


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            items: [],
            projects: [],
            token: '',



        }
    }

    createProject(name, user, url) {
        const headers = this.get_headers()
        const data = {name: name, users: user, url: url}
        axios.post('http://127.0.0.1:8001/api/projects/', data, {headers}).then(
            response => {

                this.load_data()
            }
        ).catch(error => {
            console.log(error)
            this.setState({projects: []})
        })


    }

    deleteProject(id) {
        const headers = this.get_headers()
        axios.delete(`http://127.0.0.1:8000/api/projects/${id}`, {headers}).then(
            response => {
                this.load_data()
            }
        ).catch(error => {
            console.log(error)
            this.setState({projects: []})
        })
    }

    deleteToDo(id) {
        const headers = this.get_headers()
        axios.delete(`http://127.0.0.1:8000/api/ToDo/${id}`, {headers}).then(
            response => {
                this.load_data()
            }
        ).catch(error => {
            console.log(error)
            this.setState({items: []})
        })
    }

    createToDo(project, text, creator) {
        const headers = this.get_headers()
        const data = {
            projects: project,
            text: text,
            users: creator
        }
        axios.post('http://127.0.0.1:8001/api/ToDo/', data, {headers}).then(
            response => {

                this.load_data()
            }
        ).catch(error => {
            console.log(error)
            this.setState({items: []})
        })

    }

    load_data() {
        const headers = this.get_headers()
        axios.get(get_url('users/'), {headers}).then(response => {
            // const users = response.data
            this.setState({users: response.data})
        }).catch(error => {
            console.log(error)
            this.setState({'users': []})
        })

        axios.get(get_url('ToDo/'), {headers}).then(response => {
            // const users = response.data
            this.setState({items: response.data})
        }).catch(error => {
            console.log(error)
            this.setState({'ToDo': []})
        })

        axios.get(get_url('projects/'), {headers}).then(response => {
            // const users = response.data
            this.setState({projects: response.data})
        }).catch(error => {
            console.log(error)
            this.setState({'projects': []})
        })

    }


    set_token(token) {
        // localStorage.setItem('token', token)
        // let item = localStorage.getItem('token')
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, () => this.load_data())
        console.log(this.state.token)
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, () => this.load_data())
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {
            username: username,
            password: password
        })
            .then(response => {
                this.set_token(response.data['token'])
            }).catch(error => console.log(error))
    }


    is_authenticated() {
        return !!this.state.token
    }



    logout() {
        this.set_token('')

    }

    get_headers() {
        let headers = {
            'Content-Type': 'application/json'
        }
        if (this.is_authenticated()) {
            headers['Authorization'] = `Token ${this.state.token}`
        }

        return headers

    }


    componentDidMount() {
        this.get_token_from_storage()
        // this.load_data()
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
                            <Route exact path='/Users/'
                                   component={() => < UserList users={this.state.users}/>}/>

                            <Route exact path='/ToDo/'
                                   component={() => < ToDoList
                                       items={this.state.items}
                                       deleteToDo={(id) => this.deleteToDo(id)}/>}/>

                            <Route exact path='/ToDo/create/'
                                   component={() => < ToDoForm
                                       items={this.state.items}
                                       createToDo={(project, text, creator) => this.createToDo(project, text, creator)}/>}/>

                            <Route exact path='/projects/'
                                   component={() => < ProjectList
                                       projects={this.state.projects}
                                       deleteProject={(id) => this.deleteProject(id)}/>}/>

                            <Route exact path='/projects/create/'
                                   component={() => < ProjectForm
                                       users={this.state.users}
                                       createProject={(name, user, url) => this.createProject(name, user, url)}/>}/>

                            <Route exact path='/login/'
                                   component={() => <LoginForm
                                       get_token={(username, password) => this.get_token(username, password)}/>}/>
                        </Switch>
                    </main>
                    <Footer/>
                </BrowserRouter>
            </div>


        )

    }
}


export default App;


