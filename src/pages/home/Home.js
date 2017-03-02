import React, { PureComponent } from 'react';
import LinkButton from '../../shared/components/LinkButton/LinkButton.js';
import Svg from 'shared/components/svg/Svg';
import logoSvg from 'shared/media/images/logos/logo.svg';
import twitterSvg from 'shared/media/images/icons/twitter.svg';
import './Home.css';

class Home extends PureComponent {
    render() {
        return (
            <main className="home-page">
                <div className="block">
                    <div className="inner">
                        <Svg className="logo" svg={ logoSvg } />
                        <h1>Bringing the Oporto area JavaScript Community together.</h1>
                        <p className="description">
                            We're always organising events for the community
                            to share, discuss & push their JavaScript skills forward.</p>
                        <LinkButton
                            link="https://www.youtube.com/user/opojs"
                            target="_blank"
                            title="Check our latest talks"
                            animation="skew" />
                        <a className="twitter-cta" href="https://twitter.com/opojs" target="_blank">
                            <Svg className="twitter-icon" svg={ twitterSvg } />
                            <p>Stay in the loop,</p>
                            <strong>follow us on Twitter</strong>
                        </a>
                    </div>
                </div>
            </main>
        );
    }
}

export default Home;
