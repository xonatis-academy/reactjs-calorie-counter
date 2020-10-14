import React from 'react';

class Register extends React.Component {

    render() {
        return (
            <div>
                <p>S'enregistrer maintenant</p>
                <input type="text" placeholder="Prenom ..." /><br />
                <input type="text" placeholder="Age ..." /><br />
                <input type="text" placeholder="Email ..." /><br />
                <input type="text" placeholder="Mot de passe ..." /><br /><br />
                <button>S'inscrire</button><br />
                <button>Retour</button>
            </div>
        );
    }
}


export default Register;
