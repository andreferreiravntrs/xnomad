import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './Team.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);
  const siteTitle = config.siteTitle;

  // prettier-ignore
  return (
    <StaticPage
      title={siteTitle + " | About Us"}
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About xNomad',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>You have a vision, we provide you with the perfect space.</h1>
          <img className={css.coverImage} src={image} alt="" />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
                Checkout what we are up to on our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
            </div>

            <div className={css.contentMain}>
              <h2>
                We want to make the offline customer experience as easy as possible. You can have your 
                pop-up dream up in a day. With our auxiliary partnership with staffing, point of sales, 
                and merchandising display you can create a maximum brand experience ready for the world whether 
                you rent by day, week or month.
              </h2>

              <p>
                We are xNomad, a new technology platform which makes browsing and booking commercial popup space 
                as easy as AirBnB makes booking a hotel room.
              </p>
              <p>
                xNomad is the Nordics' leading marketplace platform for short-term retail space.
              </p>
              <p>
                We connect brands and entrepreneurs with their idea retail space that they rent for a 
                short-term period to create a pop-up store experience.
              </p>
              <p>
                The spaces are ready to move into, and some spaces are able to handle sales for you. 
              </p>

              <h2 id="contact">Contact us</h2>
              <p>Kungsgatan 6<br/>11143 Stockholm <br/>Sweden</p>
              <a href="mailto:hello@xnomad.co">hello@xnomad.co</a>
            </div>
          </div>

        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
