import React, { PureComponent } from 'react';
import { IndexLink, Link } from 'react-router';
import './Navigation.css';

class Navigation extends PureComponent {
    render() {
        return (
            <nav className="header-navigation">
                <ul className="header-navigation__list">
                    <li className="header-navigation__list-item">
                        <IndexLink to="/" className="header-navigation__link" activeClassName="header-navigation__link--active">
                            Home
                        </IndexLink>
                    </li>
                    <li className="header-navigation__list-item">
                        <Link to="/about" className="header-navigation__link" activeClassName="header-navigation__link--active">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
