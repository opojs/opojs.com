import React, { PureComponent, PropTypes } from 'react';
import classnames from 'classnames';

class ButtonLink extends PureComponent {
    render() {
        const { link, title, target, className } = this.props;

        return (
            <a
                className={ classnames('button', className) }
                href={ link }
                target={ target || '_self' }>
                { title }
            </a>
        );
    }
}

ButtonLink.propTypes = {
    link: PropTypes.object.isRequired,
    title: PropTypes.string,
    target: PropTypes.string,
    className: PropTypes.string,
};

module.exports = ButtonLink;
