import React, { PureComponent } from 'react';
import LinkButton from '../../shared/components/LinkButton/LinkButton.js';
import Svg from 'shared/components/svg/Svg';
import logoSvg from 'shared/media/images/logos/logo.svg';
import playSvg from 'shared/media/images/icons/play.svg';
import twitterSvg from 'shared/media/images/icons/twitter.svg';
import './Home.css';

class Home extends PureComponent {
    render() {
        const twitterIcon = (
            <Svg className="twitter-icon" svg={ twitterSvg } />
        );

        return (
            <main className="home-page">
                <div className="block">
                    <div className="inner">
                        <Svg className="logo" svg={ logoSvg } />
                        <h1>Bringing the Oporto area JavaScript Community together.</h1>
                        <p>
                            We're always organising events for the community
                            to share, discuss & push their JavaScript skills forward.</p>
                        <div className="main-cta-area">
                            <LinkButton
                                className="main-cta"
                                link="https://twitter.com/opojs"
                                target="_blank"
                                title="Follow us on Twitter"
                                animation="skew"
                                icon={ twitterIcon } />
                        </div>
                        <div className="secondary-cta-area">
                            <a className="secondary-cta" href="https://www.youtube.com/user/opojs" target="_blank">
                                <div className="svg-wrapper">
                                    <Svg className="play-icon" svg={ playSvg } />
                                </div>
                                <p>Check our talks</p>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Home;
