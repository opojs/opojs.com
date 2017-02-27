import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import SvgInline from 'shared/components/svg/SvgInline';
import Navigation from './navigation/Navigation';
import moxySvg from 'shared/media/images/logos/moxy-square.inline.svg';
import './Header.css';

class Header extends PureComponent {
    render() {
        return (
            <header className="header">
                <Link to="/">
                    <SvgInline className="header__logo" svg={ moxySvg } />
                </Link>
                <Navigation classname="header__navigation" />
            </header>
        );
    }
}

export default Header;
