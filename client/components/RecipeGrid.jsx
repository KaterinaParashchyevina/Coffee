import React from 'react';
import Masonry from 'react-masonry-component';
import Recipe from './Recipe.jsx';

const RecipeGrid = React.createClass({
	render() {
        const masonryOptions = {
            itemSelector: '.Recipe',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };

        return (
            <Masonry
                className='recipesGrid'
                options={masonryOptions}
            >
                {
                    this.props.recipes.map(recipe =>
                        <Recipe
                            key={recipe.id}
                            title={recipe.title}
                            onDelete={this.props.onRecipeDelete.bind(null, recipe)}
                            color={recipe.color}
                        >
                            {recipe.text}
                        </Recipe>
                    )
                }
            </Masonry>
        );
    }
});

export default RecipeGrid;
