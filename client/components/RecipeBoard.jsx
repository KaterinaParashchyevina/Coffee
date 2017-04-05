import React from 'react';

import RecipesActions from'../actions/RecipesActions';
import RecipesStore from'../stores/RecipesStore';


import RecipeEditor from './RecipeEditor.jsx';
import RecipeGrid from './RecipeGrid.jsx';

function getStateFromFlux(){
	return {
		isLoading: RecipesStore.isLoading(),
		recipes: RecipesStore.getRecipes()
	};
}

const RecipeBoard = React.createClass({
	getInitialState(){
		return getStateFromFlux();
	},

	componentWillMount(){
		RecipesActions.loadRecipes();
	},

	componentDidMount(){
		RecipesStore.addChangeListener(this._onChange);
	},

	componentWillUnmount(){
		RecipesStore.removeChangeListener(this._onChange);
	},
	handleRecipeAdd(data){
		RecipesActions.createRecipe(data);
	},

	handleRecipeDelete(recipe){
		RecipesActions.deleteRecipe(recipe.id);
	},

	render(){
		return(
			<div className="recipeBoard">
				<h1> Delicious recipes of coffee</h1>
				<RecipeEditor onRecipeAdd={this.handleRecipeAdd}/>
				<RecipeGrid recipes={this.state.recipes} onRecipeDelete={this.handleRecipeDelete} />
			</div>
		);
	},

	_onChange(){
		this.setState(getStateFromFlux());
	}
});

export default RecipeBoard;