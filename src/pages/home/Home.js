import React, { PureComponent } from 'react';
import ButtonLink from '../../shared/components/ButtonLink/ButtonLink.js';
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
                        <h1>Come and get to know us !</h1>
                        <p>We are having our fourth meetup on March 29.</p>
                        <ButtonLink
                            link="https://www.youtube.com/user/opojs"
                            target="_blank"
                            title="Check out our latest talks"
                            animation="skew" />
                        <a className="twitter-cta" href="https://twitter.com/opojs" target="_blank">
                            <Svg className="twitter-icon" svg={ twitterSvg } />
                            <p>Stay in the loop!</p>
                            <strong>Follow us on Twitter</strong>
                        </a>
                    </div>
                </div>
            </main>
        );
    }
}


export default Home;
