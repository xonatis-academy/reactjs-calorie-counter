import React from 'react';
import './App.css';
import Calculator from './screens/Calculator';
import Login from './screens/Login';
import Profile from './screens/Profile';
import Register from './screens/Register';

class App extends React.Component {

    state = {
        ecranAAfficher: 'Register'
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
                <Profile />
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
