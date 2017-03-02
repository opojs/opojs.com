import React, { PureComponent, PropTypes } from 'react';
import Helmet from 'react-helmet';
import './App.css';
import { default as buildPageRoutes } from './pages/buildRoutes';

class App extends PureComponent {
    render() {
        const { children } = this.props;

        return (
            <div className="app">
                <Helmet
                    htmlAttributes={ { lang: 'en' } }
                    defaultTitle="opoJS"
                    titleTemplate="opoJS"
                    meta={ [
                        { name: 'description', content: 'Meetup dedicated to all JavaScript aficionados in Porto (OPO) area.' },
                    ] } />

                { children }
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
