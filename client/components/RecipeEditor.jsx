import React from 'react';
import Color from './Color.jsx';

const RecipeEditor = React.createClass({
	getInitialState(){
		return {
			title: '',
			text: '',
			color: '#ffffff'
		};
	},

	handleTextChange(event) {
		this.setState({ text: event.target.value });
	},

	handleTitleChange(event) {
		this.setState({ title: event.target.value });
	},

	handleRecipeAdd(){
		const newRecipe = {
			title: this.state.title,
			text: this.state.text,
			color: this.state.color
		};

		this.props.onRecipeAdd(newRecipe);
		this.setState({ text: '', title: '', color: '#ffffff' });
	},
	handleColorChange(color){
		this.setState({color});
	},
	render(){
		return (
				<div className="recipeEditor">
					<input 
						type='text'
						className="recipeEditor_title"
						placeholder='Enter title'
						value={this.state.title}
						onChange={this.handleTitleChange}
					/>
					<textarea
						placeholder="Enter recipe description"
						rows = {5}
						className="recipeEditor_text"
						value={this.state.text}
						onChange={this.handleTextChange}
					/>
					<div className="recipeEditor_footer">
						<Color
                        value={this.state.color}
                        onChange={this.handleColorChange}
                    	/>
						<button
							className="recipeEditor_button"
							disabled={!this.state.text}
							onClick={this.handleRecipeAdd}
						>	
						Add 
						</button>
					</div>
				</div>
			);
	}
});

export default RecipeEditor;