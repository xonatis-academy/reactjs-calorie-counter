import React from 'react';

class Profile extends React.Component {

    render() {
        return (
            <div>
                <p>
                    Bonjour {this.props.toto}
                </p>
                <input type="text" value="michael@toto.com" placeholder="Email ..." /><br />
                <input type="text" value="65" placeholder="Age ..." /><br />
                <button>Enregistrer</button><br />
                <button onClick={this.props.coco}>Calculer mon repas</button><br />
                <button onClick={this.props.goToLoginBox}>Deconnexion</button>
            </div>
        );
    }
}


export default Profile;
