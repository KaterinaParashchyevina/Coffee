import React from 'react';
import cx from 'classnames';


const COLORS = ['#CC9966', '#CC9933', '#996633', '#ffd6c1', '#efe0d1', '#eaeac1', '#FFCC99'];

const Color = React.createClass({
    render() {
        return (
            <div className='Color'>
                {
                    COLORS.map(color =>
                        <div
                            key={color}
                            className={cx('Color__swatch', { selected: this.props.value === color })}
                            style={{ backgroundColor: color }}
                            onClick={this.props.onChange.bind(null, color)}
                        />
                    )
                }
            </div>
        );
    }
});

export default Color;