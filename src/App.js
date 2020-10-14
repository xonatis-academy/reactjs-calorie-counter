import React from 'react';
import './App.css';
import Profile from './screens/Profile';

class App extends React.Component {

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <Profile />
                </header>
            </div>
        );
    }
}


export default App;
