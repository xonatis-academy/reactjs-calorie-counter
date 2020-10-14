import React from 'react';

class Profile extends React.Component {

    render() {
        return (
            <div>
                <p>
                    Bonjour Michael
                </p>
                <input type="text" value="michael@toto.com" placeholder="Email ..." /><br />
                <input type="text" value="65" placeholder="Age ..." /><br />
                <button>Enregistrer</button><br />
                <button>Calculer mon repas</button>
            </div>
        );
    }
}


export default Profile;
