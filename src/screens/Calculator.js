import React from 'react';
import ServiceContext from '../ServiceContext';

class Calculator extends React.Component {

    static contextType = ServiceContext;

    render() {
        let ingredients = this.context.ingredientService.list();
        let listeDeBoutonsPourLesIngredients = [];
        for (const a of ingredients) {
            let bouton = (
                <button>{a.name} ({a.calorieParGram})</button>
            );
            listeDeBoutonsPourLesIngredients.push(bouton);
        }

        return (
            <div>
                {listeDeBoutonsPourLesIngredients}<br /><br />
                Tomate<br />
                <input type="text" value="123" placeholder="Quantité ..." /><br />
                <button>Ajouter au plat</button><br />
                <p>
                    140 Kcal
                </p>
                <button onClick={this.props.coucou}>Retour</button>
            </div>
        );
    }
}

export default Calculator;
