import React, { PureComponent, PropTypes } from 'react';
import classnames from 'classnames';
import './Svg.css';

// See: https://github.com/Karify/external-svg-sprite-loader

class Svg extends PureComponent {
    render() {
        const { svg, className, title, ...props } = this.props;

        return (
            <i className={ classnames('svg', className) }>
                <svg viewBox={ svg.viewBox } { ...props }>
                    { title ? <title>{ title }</title> : null }
                    <use xlinkHref={ svg.symbol } />
                </svg>
            </i>
        );
    }
}

Svg.propTypes = {
    svg: PropTypes.object.isRequired,
    title: PropTypes.string,
    className: PropTypes.string,
};

module.exports = Svg;
