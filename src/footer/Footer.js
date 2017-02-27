import React, { PureComponent } from 'react';
import './Footer.css';

class Footer extends PureComponent {
    render() {
        return (
            <footer className="footer">
                <a className="footer__madewithmoxy" href="https://moxy.studio" target="_blank">#madewithmoxy</a>
            </footer>
        );
    }
}

export default Footer;
