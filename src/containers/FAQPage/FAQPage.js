import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import config from '../../config';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
} from '../../components';

import css from './FAQPage.css';

const FAQPage = () => {
  const siteTitle = config.siteTitle;

  // prettier-ignore
  return (
    <StaticPage
      title={siteTitle + " | FAQ"}
      schema={{
        '@context': 'http://schema.org',
        '@type': 'FAQPage',
        description: 'Frequently Asked Questions',
        name: 'FAQ',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1>xNomad: The Basics</h1>
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <h2>
                How does xNomad work?
              </h2>
              <p>
                We want to make the offline customer experience as easy as possible. 
                We are xNomad, a new technology platform which makes browsing and booking 
                commercial popup space as easy as AirBnB makes booking a hotel room. 
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
              <p>
                Tenants can search for spaces by either browsing our featured destinations or entering 
                their preferred location directly into the search bar.
              </p>
              <p>
                Landlords can list a space by emailing <a href="mailto:hello@xnomad.co">hello@xnomad.co
                </a> or submitting a space form online.
              </p>

              <h2>
                What exactly is a pop-up shop?
              </h2>
              <p>
                A pop-up shop is a temporary retail space. They are an effective way to appeal to all of your 
                potential customers senses. They appear in all shapes and sizes, typically taking over a space 
                for anything from a couple of hours to up to a year. They are used for all sorts of purposes, 
                from launching new products, boosting brand awareness, sample sales or testing an idea.
              </p>

              <h2>
                How long does it take to get started?
              </h2>
              <p>
                You can have your pop-up dream up as quickly as a day. You follow the simple three step process 
                of logging in, browsing space and booking space on xNomad. With our auxiliary partnership with 
                staffing, point of sales, and merchandising display you can create a maximum brand experience 
                ready for the world whether you rent by day, week or month.
              </p>

              <h2>
                Who can use the service?
              </h2>
              <p>
                xNomad is available to anyone with a space to fill, or an idea in need of one. Ultimately, the
                landlord determines the availability to specific ideas. If a first choice is not available, 
                we work with you to find a suitable space to meet your needs.
              </p>

              <h2>
                What works in a pop-up? Food, fashion, technology?
              </h2>
              <p>
                It starts with an idea. Bringing your brand into physical space, xNomad is here to give space 
                for your idea no matter if it is a specialty food, an ecommerce store, new product or
                demonstration. There is a rapidly growing wide range of spaces in increasing areas.
              </p>

              <h2>
                Do I get WiFi and PoS?
              </h2>
              <p>
                Each space has different terms and conditions. The spaces are ready to move into, and some spaces
                are able to handle sales for you.
              </p>
              <p>
                With our additional services through connections to our auxiliary partnership with staffing, 
                point of sales, and merchandising display you can create a maximum brand experience ready for 
                the world whether you rent by day, week or month.
              </p>

              <h2>
                How do I get access and move into (and out of) a space?
              </h2>
              <p>
                You can access your space from the beginning date of your rental period. Keys should be 
                collected within the opening hours stated on your emailed terms.
              </p>
              <p>
                Remember to include time for setup and takedown when deciding how many days to rent your 
                space for. Landlords require full rent for every day you occupy the property due to many 
                properties being booked out back to back, this must include your setup and takedown.
              </p>

              <h2>
                Can I extend my stay?
              </h2>
              <p>
                Spaces are subject to availability. We recommend extending your stay as soon as you can. 
                Extensions are made in the same procedure as the orginal booking through the xNomad marketplace. 
              </p>
              <p>
                We find that many brands would like to repeat locations. We recommend booking your desired dates in 
                groupings if possible to secure your idea dates and space.
              </p>

              <h2>
                Is it secure?
              </h2>
              <p>
                All xNomad listings are verified locations. The xNomad team visits and photographs the sites to 
                ensure best experiences possible for you use.
              </p>

              <h2>
                Are there any limits to what I can do in the space?
              </h2>
              <p>
                If you’re planning to redecorate most spaces require you return the space to the condition you 
                rented it in. In some cases properties don’t allow for major drilling or dark painting so always
                check with the landlord first.
              </p>
              <p>
                When it comes to the ‘permitted use’ of your space, it is your responsibility to ensure you have 
                all the correct licenses and planning permission from the local authority before you move into 
                your space.
              </p>

              <h2>
                Who pays for the store fittings and interior design?
              </h2>
              <p>
                The space is rented as is. When you leave the space it is to be returned the same. Spaces with fittings
                may be used as per their individual agreement, but all new desgin is to be at the cost of renter. 
              </p>
              <p>
                ​Remember to include time for setup and takedown when deciding how many days to rent your space for. 
                Landlords require full rent for every day you occupy the property due to many properties being booked 
                out back to back, this must include your setup and takedown.
              </p>

              <h2>
                How do I list my space?
              </h2>
              <p>
                You can fill in <NamedLink name="NewListingPage">this form</NamedLink>, or write 
                to <a href="mailto:hello@xnomad.co">hello@xnomad.co</a>. You decide the terms, cost, availability, 
                and who is able to use your space. xNomad has all the contracts and helps you find great brands 
                who wants great space. We make it easy for you to approve, manage and monitor while you make money 
                on your utilized space. We come and take nice photos to give your property the best possible exposure.
              </p>

              <h2>
                Do I need to empty my space?
              </h2>
              <p>
                It is up to each property manager to decide if they would like to do a shop in shop, or if they will 
                offer the entire space. In the case of an empty space, it is up to the landlord to decide if they want 
                to make it a white space or leave it raw for the tenant to transform. We have people looking for all 
                sorts of spaces.
              </p>

              <h2 id="contact">Have another question? Contact us</h2>
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

export default FAQPage;
