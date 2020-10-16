import React from 'react';
import './App.css';
import Calculator from './screens/Calculator';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Register from './screens/Register';

class App extends React.Component {

    state = {
        ecranAAfficher: 'Login',
        connectedUser : {
            firstname: 'Jean',
            username: 'jean@toto.com',
            password: 'tiptop'
        }
    }

    changeConnectedUser = (toto) => {
        this.setState({
            connectedUser: toto
        })
    }

    changeScreenCalculator = () => {
        this.setState({
            ecranAAfficher: 'Calculator'
        })
    }

    changeScreenProfile = () =>  {
        this.setState({
            ecranAAfficher: 'Profile'
        })
    }

    changeScreenRegister = () => {
        this.setState({
            ecranAAfficher: 'Register'
        })
    }

    changeScreenLogin = () => {
        this.setState({
            ecranAAfficher: 'Login'
        })
    }

    render() {

        let ecranElement = null;
        if (this.state.ecranAAfficher == 'Login') {
            ecranElement = (
                <Login changeConnectedUserForApp={this.changeConnectedUser} goToProfileBox={this.changeScreenProfile} goToRegisterBox={this.changeScreenRegister} />
            );
        } else if (this.state.ecranAAfficher == 'Calculator') {
            ecranElement = (
                <Calculator coucou={this.changeScreenProfile} />
            );
        } else if (this.state.ecranAAfficher == 'Profile') {
            ecranElement = (
                <Profile goToLoginBox={this.changeScreenLogin} toto={this.state.connectedUser.firstname} coco={this.changeScreenCalculator} />
            );
        } else if (this.state.ecranAAfficher == 'Register') {
            ecranElement = (
                <Register goToLoginBox={this.changeScreenLogin} />
            );
        }

        return (
            <div className="App">
                <header className="App-header">
                    {ecranElement}
                </header>
            </div>
        );
    }
}


export default App;
