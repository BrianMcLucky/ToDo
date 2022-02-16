import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "./components/user";
import axios from "axios";
import Footer from "./components/footer";
import Menu from "./components/menu";
import './css/footer-style.css'
import './css/menu-style.css'
import './css/user-style.css'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': []
        };
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
        axios.get('http://127.0.0.1:8000/api/users/').then(response => {
            // const users = response.data
            this.setState(
                {
                    'users': response.data
                })
        }).catch(error => console.log(error))


    }

    render() {
        return (
            <div>
                <header>
                    <Menu/>
                </header>
                <main>
                    < UserList users={this.state.users}/>
                </main>
                <Footer/>
            </div>

        );
    }
}


export default App;
