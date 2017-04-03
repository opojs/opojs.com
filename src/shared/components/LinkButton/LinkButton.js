import React, { PureComponent, PropTypes } from 'react';
import classnames from 'classnames';
import '../Button/Button.css';

class ButtonLink extends PureComponent {
    render() {
        const {
          link,
          title,
          preTitle,
          target,
          onClick,
          className,
          animation,
          icon,
        } = this.props;

        const buttonClass = classnames({
            button: true,
            [`${className}`]: className,
            [`animation-${animation}`]: animation,
        });

        return (
            <a
                className={ buttonClass }
                href={ link }
                target={ target || '_self' }
                onClick={ onClick }>
                { icon }
                { preTitle ? <span className="pre-title">{ preTitle }</span> : null }
                <span className="title">{ title }</span>
            </a>
        );
    }
}

ButtonLink.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string,
    preTitle: PropTypes.string,
    target: PropTypes.string,
    className: PropTypes.string,
    animation: PropTypes.string,
    icon: PropTypes.object,
    onClick: PropTypes.func,
};

module.exports = ButtonLink;
