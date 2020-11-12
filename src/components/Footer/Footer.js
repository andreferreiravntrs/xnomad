import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import classNames from 'classnames';
import { twitterPageURL } from '../../util/urlHelpers';
import config from '../../config';
import {
  IconSocialMediaFacebook,
  IconSocialMediaInstagram,
  IconSocialMediaTwitter,
  Logo,
  ExternalLink,
  NamedLink,
} from '../../components';

import css from './Footer.css';

const renderSocialMediaLinks = intl => {
  const { siteFacebookPage, siteInstagramPage, siteTwitterHandle } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  const goToFb = intl.formatMessage({ id: 'Footer.goToFacebook' });
  const goToInsta = intl.formatMessage({ id: 'Footer.goToInstagram' });
  const goToTwitter = intl.formatMessage({ id: 'Footer.goToTwitter' });

  const fbLink = siteFacebookPage ? (
    <ExternalLink key="linkToFacebook" href={siteFacebookPage} className={css.icon} title={goToFb}>
      <IconSocialMediaFacebook />
    </ExternalLink>
  ) : null;

  const twitterLink = siteTwitterPage ? (
    <ExternalLink
      key="linkToTwitter"
      href={siteTwitterPage}
      className={css.icon}
      title={goToTwitter}
    >
      <IconSocialMediaTwitter />
    </ExternalLink>
  ) : null;

  const instragramLink = siteInstagramPage ? (
    <ExternalLink
      key="linkToInstagram"
      href={siteInstagramPage}
      className={css.icon}
      title={goToInsta}
    >
      <IconSocialMediaInstagram />
    </ExternalLink>
  ) : null;
  return [fbLink, twitterLink, instragramLink].filter(v => v != null);
};

const Footer = props => {
  const { rootClassName, className, intl } = props;
  const socialMediaLinks = renderSocialMediaLinks(intl);
  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.container}>
        <div className={classNames(css.row, css.flexGrow)}>
          <div className={classNames(css.col, css.organization)}>
            <NamedLink name="LandingPage" className={css.logoLink}>
              <Logo format="desktop" className={css.logo} />
            </NamedLink>
            <div>{socialMediaLinks}</div>
            <p className={css.organizationDescription}>
              <FormattedMessage id="Footer.organizationDescription" />
            </p>
          </div>
          <div className={classNames(css.col, css.searches)}>
            <h6 className={css.h6} ><FormattedMessage id="Footer.exploreSpaces" /></h6>
            <ul className={css.list}>
              <li className={css.listItem}>
                <NamedLink
                  name="SearchPage"
                  to={{
                    search:
                      '?address=Norrmalm%2C%20Stockholm%2C%20Sverige&bounds=59.355998%2C18.09535189999997%2C59.3194009%2C18.024109899999985',
                  }}
                  className={css.link}
                >
                  <FormattedMessage id="Footer.searchNorrmalm" />
                </NamedLink>
              </li>
              <li className={css.listItem}>
                <NamedLink
                  name="SearchPage"
                  to={{
                    search:
                      '?address=Vasastan%2C%20Norrmalm%2C%20Stockholm%2C%20Sverige&bounds=59.355998%2C18.064983799999936%2C59.33544999999999%2C18.024109899999985',
                  }}

                  className={css.link}
                >
                  <FormattedMessage id="Footer.searchVasastan" />
                </NamedLink>
              </li>
              <li className={css.listItem}>
                <NamedLink
                  name="SearchPage"
                  to={{
                    search:
                      '?address=Kungsholmen%2C%20Stockholm%2C%20Sverige&bounds=59.34187499999999%2C18.058842099999993%2C59.3144181%2C17.97664800000007',
                  }}
                  className={css.link}
                >
                  <FormattedMessage id="Footer.searchKungsholmen" />
                </NamedLink>
              </li>
              <li className={css.listItem}>
                <NamedLink
                  name="SearchPage"
                  to={{
                    search:
                      '?address=Södermalm%2C%20Stockholm%2C%20Sverige&bounds=59.33049874%2C18.1078333%2C59.28616351%2C18.02543584',
                  }}
                  className={css.link}
                >
                  <FormattedMessage id="Footer.searchSodermalm" />
                </NamedLink>
              </li>
            </ul>
            <ul className={css.list}>
              <li className={css.listItem}>
                <NamedLink
                  name="SearchPage"
                  to={{
                    search:
                      '?address=Gamla%20Stan%2C%20Södermalm%2C%20Stockholm%2C%20Sverige&bounds=59.3292931%2C18.077831500000002%2C59.32114859999999%2C18.059549199999992',
                  }}
                  className={css.link}
                >
                  <FormattedMessage id="Footer.searchGamlaStan" />
                </NamedLink>
              </li>
              <li className={css.listItem}>
                <NamedLink
                  name="SearchPage"
                  to={{
                    search:
                      '?address=Biblioteksgatan%2C%20Stockholm%2C%20Sverige&bounds=59.33726498%2C18.0766929%2C59.33172734%2C18.06639322',
                  }}
                  className={css.link}
                >
                  <FormattedMessage id="Footer.searchBiblioteksgatan" />
                </NamedLink>
              </li>
              <li className={css.listItem}>
                <NamedLink
                  name="SearchPage"
                  to={{
                    search:
                      '?address=Kungsgatan%2C%20Stockholm%2C%20Sverige&bounds=59.33844093%2C18.07289004%2C59.33290349%2C18.06259036',
                  }}
                  className={css.link}
                >
                  <FormattedMessage id="Footer.searchKungsgatan" />
                </NamedLink>
              </li>
              <li className={css.listItem}>
                <NamedLink
                  name="SearchPage"
                  to={{
                    search:
                      '?address=Östermalm%2C%20Stockholm%2C%20Sweden&bounds=59.35074353%2C18.11020872%2C59.32110856%2C18.06386014',
                  }}
                  className={css.link}
                >
                  <FormattedMessage id="Footer.searchOstermalm" />
                </NamedLink>
              </li>
            </ul>
          </div>
          <div className={classNames(css.col, css.infoLinks)}>
            <h6 className={css.h6} ><FormattedMessage id="Footer.about" /></h6>
            <ul className={css.list}>
              <li className={css.listItem}>
                <ExternalLink href={'mailto:hello@xnomad.com'} className={css.link}>
                  <FormattedMessage id="Footer.email" />
                </ExternalLink>
              </li>
              <li className={css.listItem}>
                <NamedLink name="FAQPage" className={css.link}>
                  <FormattedMessage id="Footer.toFAQPage" />
                </NamedLink>
              </li>
              <li className={css.listItem}>
                <NamedLink name="AboutPage" className={css.link}>
                  <FormattedMessage id="Footer.toAboutPage" />
                </NamedLink>
              </li>
              <li className={css.listItem}>
                <NamedLink name="AboutPage" to={{ hash: '#contact' }} className={css.link}>
                  <FormattedMessage id="Footer.toContactPage" />
                </NamedLink>
              </li>
            </ul>
          </div>
          <div className={classNames(css.col, css.extraLinks)}>
            <h6 className={css.h6} ><FormattedMessage id="Footer.legal" /></h6>
            <ul className={css.list}>
              <li className={css.listItem}>
                <NamedLink name="PrivacyPolicyPage" className={css.link}>
                  <FormattedMessage id="Footer.privacyPolicy" />
                </NamedLink>
              </li>
              <li className={css.listItem}>
                <NamedLink name="TermsOfServicePage" className={css.link}>
                  <FormattedMessage id="Footer.termsOfUse" />
                </NamedLink>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.row}>
          <div className={css.col}>
            <p className={css.organizationCopyright}>
              <FormattedMessage id="Footer.copyright" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  rootClassName: null,
  className: null,
};

Footer.propTypes = {
  rootClassName: string,
  className: string,
  intl: intlShape.isRequired,
};

export default injectIntl(Footer);
