import React, { PureComponent, PropTypes } from 'react';
import classnames from 'classnames';
import './Button.css';

class Button extends PureComponent {
    render() {
        const { title, className, onClick, animation } = this.props;

        const buttonClass = classnames({
            button: true,
            [`${className}`]: className,
            [`animation-${animation}`]: animation,
        });

        return (
            <a className={ buttonClass } onClick={ onClick }>
                { title }
            </a>
        );
    }
}

Button.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    animation: PropTypes.string,
};

module.exports = Button;
