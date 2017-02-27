import React, { PureComponent, PropTypes } from 'react';
import Helmet from 'react-helmet';
import './NotFound.css';

class NotFound extends PureComponent {
    componentWillMount() {
        // Set status code to 404
        this.props.serverContext && this.props.serverContext.res.status(404);
    }

    render() {
        return (
            <main className="not-found-page">
                <Helmet title="404" />

                <div className="not-found-page__hero" />
                <div className="not-found-page__container">
                    <h1>404</h1>
                    <p>The page you are looking for does not exist.</p>
                </div>
            </main>
        );
    }
}

NotFound.propTypes = {
    serverContext: PropTypes.object,
};

export default NotFound;
