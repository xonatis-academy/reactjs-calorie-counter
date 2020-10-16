import React from 'react';

class Profile extends React.Component {

    render() {
        return (
            <div>
                <p>
                    Bonjour {this.props.toto}
                </p>
                <button onClick={this.props.coco}>Calculer mon repas</button><br />
                <button onClick={this.props.goToLoginBox}>Deconnexion</button>
            </div>
        );
    }
}


export default Profile;
