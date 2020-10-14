import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

    state = {
        prenom: 'Joanne',
        nom: 'Dupont',
        age: 0
    }

    changerdidentite = () => {
        this.setState({
            prenom: 'Andrew'
        });
    }

    changerAge = (event) => {
        const a = event.target.value;
        this.setState({
            age: a
        })
    }

    render() {
        let block = (
            <div>
                <p>
                    Bonjour, vous etes majeur
                </p>
            </div>
        );

        if (this.state.age < 18) {
            block = null;
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {block}
                    <p>
                        Bienvenue {this.state.prenom} {this.state.nom}, qui a {this.state.age} ans
            </p>
                    <input type="text" placeholder="Entrez votre age" value={this.state.age} onChange={this.changerAge}  />
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
