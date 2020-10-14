import React from 'react';
import './App.css';
import Calculator from './screens/Calculator';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Register from './screens/Register';

class App extends React.Component {

    state = {
        ecranAAfficher: 'Profile',
        connectedUser : {
            firstname: 'Sophie',
            age: 65,
            email: 'jean@toto.com'
        }
    }

    changeScreenCalculator = () => {
        this.setState({
            ecranAAfficher: 'Calculator'
        })
    }

    render() {

        let ecranElement = null;
        if (this.state.ecranAAfficher == 'Login') {
            ecranElement = (
                <Login />
            );
        } else if (this.state.ecranAAfficher == 'Calculator') {
            ecranElement = (
                <Calculator />
            );
        } else if (this.state.ecranAAfficher == 'Profile') {
            ecranElement = (
                <Profile toto={this.state.connectedUser.firstname} coco={this.changeScreenCalculator} />
            );
        } else if (this.state.ecranAAfficher == 'Register') {
            ecranElement = (
                <Register />
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
