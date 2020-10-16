import React from 'react';

class Register extends React.Component {

    state = {
        firsname: '',
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

    changeFirstname = (event) => {
        this.setState({
            firsname: event.target.value
        })
    }

    render() {
        return (
            <div>
                <p>S'enregistrer maintenant</p>
                <input type="text" placeholder="Prenom ..." value={this.state.firsname} onChange={this.changeFirstname} /><br />
                <input type="text" placeholder="Email ..." value={this.state.username} onChange={this.changeUsername} /><br />
                <input type="text" placeholder="Mot de passe ..." value={this.state.password} onChange={this.changePassword} /><br /><br />
                <button onClick={this.props.goToLoginBox}>S'inscrire</button><br />
                <button onClick={this.props.goToLoginBox}>Retour</button>
            </div>
        );
    }
}


export default Register;
