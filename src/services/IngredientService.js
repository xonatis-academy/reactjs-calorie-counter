export default class IngredientService {

    ingredients = [
        {
            name: 'Oeuf',
            calorieParGram: 23
        },
        {
            name: 'Tomate',
            calorieParGram: 238
        },
        {
            name: 'Courgette',
            calorieParGram: 211
        },
        {
            name: 'Poire',
            calorieParGram: 455
        }
    ]

    // precondition : /
    // postcondition : renvoie tous les ingredients : liste de dictionnaire
    list() {
        return this.ingredients;
    }

}
