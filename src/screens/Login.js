import React from 'react';
import ServiceContext from '../ServiceContext';

class Login extends React.Component {

    static contextType = ServiceContext;

    state = {
        username: '',
        password: '',
        message: ''
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

    checkIfUserCanConnect = () => {
        let canConnect = this.context.userService.connect(this.state.username, this.state.password);
        if (canConnect) {
            let user = this.context.userService.get(this.state.username);
            this.props.changeConnectedUserForApp(user);
            this.props.goToProfileBox();
        } else {
            this.setState({
                message: 'Pfffff .... '
            })
        }
    }

    render() {
        return (
            <div>
                Login<br />
                <div>{this.state.message}</div>
                <input type="text" placeholder="Email ..." value={this.state.username} onChange={this.changeUsername} /><br />
                <input type="password" placeholder="Mot de passe ..." value={this.state.password} onChange={this.changePassword} /><br />
                <button onClick={this.checkIfUserCanConnect}>S'identifier</button><br />
                <button onClick={this.props.goToRegisterBox}>Créer un compte</button>
            </div>
        );
    }
}


export default Login;
