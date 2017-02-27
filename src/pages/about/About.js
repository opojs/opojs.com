import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import Svg from 'shared/components/svg/Svg';
import cakeSvg from 'shared/media/images/icons/cake.svg';
import thumbsUpSvg from 'shared/media/images/icons/thumbs-up.svg';
import thumbsDownSvg from 'shared/media/images/icons/thumbs-down.svg';
import childCareSvg from 'shared/media/images/icons/child-care.svg';
import './About.css';

class About extends PureComponent {
    render() {
        return (
            <main className="about-page">
                <Helmet title="About" />

                <div className="about-page__hero" />
                <div className="about-page__container">
                    <h1>About</h1>
                    <p>This is the about page!</p>

                    <p>You may hover the icons to see their fill color animating.</p>

                    <p>
                        <Svg className="about-page__icon" svg={ cakeSvg } />
                        <Svg className="about-page__icon" svg={ thumbsUpSvg } />
                        <Svg className="about-page__icon" svg={ thumbsDownSvg } />
                        <Svg className="about-page__icon" svg={ childCareSvg } />
                    </p>

                    <div>
                        <Svg className="about-page__icon" svg={ cakeSvg } />
                        <span className="about-page__icon-name">Cake</span>
                    </div>
                    <div>
                        <Svg className="about-page__icon" svg={ thumbsUpSvg } />
                        <span className="about-page__icon-name">Thumbs up</span>
                    </div>
                    <div>
                        <Svg className="about-page__icon" svg={ thumbsDownSvg } />
                        <span className="about-page__icon-name">Thumbs down</span>
                    </div>
                    <div>
                        <Svg className="about-page__icon" svg={ childCareSvg } />
                        <span className="about-page__icon-name">Child care</span>
                    </div>
                </div>
            </main>
        );
    }
}

export default About;
