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
                            link="https://www.meetup.com/opo-js/"
                            target="_blank"
                            title="Know more about the meetup" />
                        <div className="twitter-cta">
                            <Svg className="twitter-icon" svg={ twitterSvg } />
                            <p>Stay in the loop!</p>
                            <a href="https://twitter.com/opojs">Follow us on Twitter</a>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}


export default Home;
