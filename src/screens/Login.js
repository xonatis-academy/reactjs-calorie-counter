import React from 'react';

class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    changeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    changePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
            <div>
                Login<br />
                <input type="text" placeholder="Email ..." value={this.state.username} onChange={this.changeUsername} /><br />
                <input type="password" placeholder="Mot de passe ..." value={this.state.password} onChange={this.changePassword} /><br />
                <button onClick={this.props.goToProfileBox}>S'identifier</button><br />
                <button onClick={this.props.goToRegisterBox}>Créer un compte</button>
            </div>
        );
    }
}


export default Login;
