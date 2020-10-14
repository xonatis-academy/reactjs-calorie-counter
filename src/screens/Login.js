import React from 'react';

class Login extends React.Component {

    render() {
        return (
            <div>
                Login<br />
                <input type="text" placeholder="Email ..." /><br />
                <input type="password" placeholder="Mot de passe ..." /><br />
                <button>S'identifier</button><br />
                <button>Créer un compte</button>
            </div>
        );
    }
}


export default Login;
