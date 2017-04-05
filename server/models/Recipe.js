import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
	title: {type: String},
	text: {type: String},
	color: {type: String}

});

mongoose.model('Recipe', RecipeSchema);

