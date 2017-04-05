import React from 'react';


const Recipe = React.createClass({
    render() {
        const style = { backgroundColor: this.props.color };

        return (
            <div className='Recipe' style={style}>
                <span className='Recipe__del-icon' onClick={this.props.onDelete}> × </span>
                {
                    this.props.title
                    ?
                        <h4 className='Recipe__title'>{this.props.title}</h4>
                    :
                        null
                }
                <div className="Recipe__img"></div>
                <div className='Recipe__text'>{this.props.children}</div>
            </div>
        );
    }
});

export default Recipe;