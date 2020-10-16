import React from 'react';
import ServiceContext from '../ServiceContext';

class Calculator extends React.Component {

    static contextType = ServiceContext;

    state = {
        selectedName: null,
        selectedIngredientCalorie: 0,
        totalCalorie: 0,
        quantity: 0
    }

    changeQuantity = (event) => {
        this.setState({
            quantity: event.target.value
        })
    }

    selectIngredient = (toutIngredient) => () => {
        this.setState({
            selectedName: toutIngredient.name,
            selectedIngredientCalorie: toutIngredient.calorieParGram
        })
    }

    addToMeal = () => {
        this.setState({
            totalCalorie: this.state.totalCalorie + this.state.quantity * this.state.selectedIngredientCalorie
        })
    }

    render() {
        let ingredients = this.context.ingredientService.list();
        let listeDeBoutonsPourLesIngredients = [];
        for (const a of ingredients) {
            let bouton = (
                <button onClick={this.selectIngredient(a)}>{a.name} ({a.calorieParGram})</button>
            );
            listeDeBoutonsPourLesIngredients.push(bouton);
        }

        return (
            <div>
                {listeDeBoutonsPourLesIngredients}<br /><br />
                {this.state.selectedName}<br />
                <input type="text" value={this.state.quantity} onChange={this.changeQuantity} placeholder="Quantité ..." /><br />
                <button onClick={this.addToMeal}>Ajouter au plat</button><br />
                <p>
                    {this.state.totalCalorie} Kcal
                </p>
                <button onClick={this.props.coucou}>Retour</button>
            </div>
        );
    }
}

export default Calculator;
