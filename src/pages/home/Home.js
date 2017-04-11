import React, { PureComponent } from 'react';
import LinkButton from '../../shared/components/LinkButton/LinkButton.js';
import Svg from 'shared/components/svg/Svg';
import SvgInline from 'shared/components/svg/SvgInline';
import logoSvg from 'shared/media/images/logos/logo.inline.svg';
import playSvg from 'shared/media/images/icons/play.svg';
import twitterSvg from 'shared/media/images/icons/twitter.svg';
import { trackViewContent } from 'shared/tracking';
import './Home.css';

class Home extends PureComponent {
    constructor(props) {
        super(props);

        this._handleCheckMeetupInfo = this._handleCheckMeetupInfo.bind(this);
        this._handleCheckTwitter = this._handleCheckTwitter.bind(this);
        this._handleCheckYoutube = this._handleCheckYoutube.bind(this);
    }
    render() {
        // Generic, no event information
        // const tagline = 'Bringing the Oporto area JavaScript Community together.';
        // const intro = 'We\'re always organising events for the community to share, discuss & push their JavaScript skills forward.';
        // const primaryArea = this._renderTwitterInfo();
        // const secondaryArea = this._renderYoutubeInfo();

        // Pre-event information
        const tagline = 'Rebooting OPO.js: Meetup #4 is here!';
        const intro = 'Celebrating the reboot, we’re rebranding OPO.js and opening up the registrations for the long overdue meetup #4,\
                       taking place on April 12, which is right around the corner.';
        const primaryArea = this._renderKnowMoreAboutMeetup('https://attending.io/events/opojs-meetup-4');
        const secondaryArea = this._renderTwitterInfo(false);

        return (
            <main className="home-page">
                <div className="block">
                    <div className="inner">
                        <SvgInline className="logo" svg={ logoSvg } />
                        <h1>{ tagline }</h1>
                        <p>{ intro }</p>
                        <div className="main-cta-area">{ primaryArea }</div>
                        <div className="secondary-cta-area">{ secondaryArea }</div>
                    </div>
                </div>
            </main>
        );
    }

    _renderTwitterInfo(mainCta = true) {
        const twitterIcon = <Svg className="twitter-icon" svg={ twitterSvg } />;

        if (mainCta) {
            return (
                <LinkButton
                    className="main-cta"
                    link="https://twitter.com/opojs"
                    target="_blank"
                    title="follow us on Twitter"
                    preTitle="Stay in the loop, "
                    animation="skew"
                    icon={ twitterIcon }
                    onClick={ this._handleCheckTwitter } />
            );
        }

        return (
            <a
                className="secondary-cta"
                href="https://twitter.com/opojs"
                target="_blank"
                onClick={ this._handleCheckTwitter }>
                { twitterIcon }
                <p>Stay in the loop, <strong>follow us on Twitter</strong></p>
            </a>
        );
    }

    _renderYoutubeInfo() {
        return (
            <a
                className="secondary-cta"
                href="https://www.youtube.com/user/opojs"
                target="_blank"
                onClick={ this._handleCheckYoutube } >
                <div className="svg-wrapper">
                    <Svg className="play-icon" svg={ playSvg } />
                </div>
                <p>Check out our latest talks</p>
            </a>
        );
    }

    _renderKnowMoreAboutMeetup(link) {
        if (!link) {
            console.error('Missing meetup link');
        }

        return (
            <LinkButton
                className="main-cta"
                link={ link }
                target="_blank"
                title="Know more about meetup #4"
                animation="skew"
                onClick={ this._handleCheckMeetupInfo } />
        );
    }

    _handleCheckMeetupInfo() {
        trackViewContent({
            content_ids: ['meetup'], // eslint-disable-line camelcase
            content_type: 'events', // eslint-disable-line camelcase
        });
    }

    _handleCheckTwitter() {
        trackViewContent({
            content_ids: ['twitter'], // eslint-disable-line camelcase
            content_type: 'channels', // eslint-disable-line camelcase
        });
    }

    _handleCheckYoutube() {
        trackViewContent({
            content_ids: ['youtube'], // eslint-disable-line camelcase
            content_type: 'channels', // eslint-disable-line camelcase
        });
    }
}

export default Home;
