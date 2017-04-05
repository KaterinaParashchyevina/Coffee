import mongoose from 'mongoose';

import configDB from '../config/database';

import '../models/Recipe';


const Recipe = mongoose.model('Recipe');


export function setUpConnection(){
	mongoose.Promise = global.Promise;
    
	mongoose.connect(configDB.url);
}

export function listRecipes(id) {
    return Recipe.find();
}

export function createRecipe(data){
	const recipe = new Recipe({
		title: data.title,
		text: data.text,
		color: data.color
	});
	return recipe.save();
}

export function deleteRecipe(id){
	return Recipe.findById(id).remove();
}