import React from 'react';
import ServiceContext from '../ServiceContext';

class Register extends React.Component {

    static contextType = ServiceContext;

    state = {
        firstname: '',
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

    changeFirstname = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }

    addUser = () => {
        let success = this.context.userService.add(this.state.username, this.state.password, this.state.firstname);
        if (success) {
            this.props.goToLoginBox();
        } else {
            this.setState({
                message: 'Username déjà pris'
            })
        }
    }

    render() {
        return (
            <div>
                <p>S'enregistrer maintenant</p>
                <div>{this.state.message}</div>
                <input type="text" placeholder="Prenom ..." value={this.state.firstname} onChange={this.changeFirstname} /><br />
                <input type="text" placeholder="Email ..." value={this.state.username} onChange={this.changeUsername} /><br />
                <input type="text" placeholder="Mot de passe ..." value={this.state.password} onChange={this.changePassword} /><br /><br />
                <button onClick={this.addUser}>S'inscrire</button><br />
                <button onClick={this.props.goToLoginBox}>Retour</button>
            </div>
        );
    }
}


export default Register;
