import axios from 'axios';


export default {
    listRecipes() {
        return axios.get(`http://localhost:8080/recipes`);
    },

    createRecipe(data) {
        return axios.post(`http://localhost:8080/recipes`, data);
    },

    deleteRecipe(recipeId) {
        return axios.delete(`http://localhost:8080/recipes/${recipeId}`);
    }
}