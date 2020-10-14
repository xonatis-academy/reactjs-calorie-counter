import React from 'react';
import './App.css';
import Calculator from './screens/Calculator';

class App extends React.Component {

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <Calculator />
                </header>
            </div>
        );
    }
}


export default App;
