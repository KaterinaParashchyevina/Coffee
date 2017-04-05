import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const RecipeActions = {
    loadRecipes() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_RECIPES_REQUEST
        });

        api.listRecipes()
        .then(({ data }) =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_RECIPES_SUCCESS,
                recipes: data
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_RECIPES_FAIL,
                error: err
            })
        );
    },

    createRecipe(recipe) {
        api.createRecipe(recipe)
        .then(() =>
            this.loadRecipes()
        )
        .catch(err =>
            console.error(err)
        );
    },

    deleteRecipe(recipeId) {
        api.deleteRecipe(recipeId)
        .then(() =>
            this.loadRecipes()
        )
        .catch(err =>
            console.error(err)
        );
    }
};

export default RecipeActions;