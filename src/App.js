import React, { PureComponent, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Header from './header/Header';
import Footer from './footer/Footer';
import './App.css';
import { default as buildPageRoutes } from './pages/buildRoutes';

class App extends PureComponent {
    render() {
        const { children } = this.props;

        return (
            <div className="app">
                <Helmet
                    htmlAttributes={ { lang: 'en' } }
                    defaultTitle="MOXY"
                    titleTemplate="MOXY - %s"
                    meta={ [
                        { name: 'description', content: 'MOXY\'s awesome react-with-moxy boilerplate' },
                    ] } />

                <Header />
                { children }
                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element,
};

export function buildRoutes() {
    return {
        path: '/',
        component: App,
        childRoutes: buildPageRoutes(),
    };
}

export default App;
