import React from 'react';
import './App.css';
import Login from './screens/Login';

class App extends React.Component {

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <Login />
                </header>
            </div>
        );
    }
}


export default App;
