import UserService from './services/UserService';
import IngredientService from './services/IngredientService';

import React from 'react';

export default React.createContext({
    userService: new UserService(),
    ingredientService: new IngredientService()
});
