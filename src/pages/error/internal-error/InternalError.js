import React, { PureComponent, PropTypes } from 'react';
import Helmet from 'react-helmet';
import './InternalError.css';

class InternalError extends PureComponent {
    componentWillMount() {
        // Set status code to 500
        this.props.serverContext && this.props.serverContext.res.status(500);

        // Log the error (console will be dropped in prod)
        this.props.err && console.error('[InternalError]', this.props.err);
    }

    componentWillReceiveProps(nextProps) {
        // Log the error if it changes (console will be dropped in prod)
        nextProps.err !== this.props.err && this.props.err && console.log('[InternalError]', this.props.err);
    }

    render() {
        return (
            <main className="internal-error-page">
                <Helmet title="Oops" />

                <div className="internal-error-page__hero" />
                <div className="internal-error-page__container">
                    <h1>Oops</h1>
                    <p>Something went really wrong and we were unable to fulfill your request.</p>
                </div>
            </main>
        );
    }
}

InternalError.propTypes = {
    err: PropTypes.object,
    serverContext: PropTypes.object,
};

export default InternalError;
