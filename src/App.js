import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

    state = {
        prenom: 'Joanne',
        nom: 'Dupont'
    }

    changerdidentite = () => {
        this.setState({
            prenom: 'Andrew'
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Bienvenue {this.state.prenom} {this.state.nom}
            </p>
                    <button onClick={this.changerdidentite}>Changer d'identité</button>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
            </a>
                </header>
            </div>
        );
    }
}


export default App;
