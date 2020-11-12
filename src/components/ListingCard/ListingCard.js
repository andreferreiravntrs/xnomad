import React from 'react';
import { string, func } from 'prop-types';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import classNames from 'classnames';
import { LINE_ITEM_DAY, LINE_ITEM_NIGHT, propTypes } from '../../util/types';
import { formatMoney } from '../../util/currency';
import { ensureListing } from '../../util/data';
import { richText } from '../../util/richText';
import { createSlug } from '../../util/urlHelpers';
import { getDistrict, calcFootfallAvg } from '../../util/xnomad';
import config from '../../config';
import { NamedLink, ResponsiveImage } from '../../components';
import { Carousel } from 'react-responsive-carousel';

import css from './ListingCard.css';

const MIN_LENGTH_FOR_LONG_WORDS = 10;

const priceData = (price, intl) => {
  if (price && price.currency === config.currency) {
    const formattedPrice = formatMoney(intl, price);
    return { formattedPrice, priceTitle: formattedPrice };
  } else if (price) {
    return {
      formattedPrice: intl.formatMessage(
        { id: 'ListingCard.unsupportedPrice' },
        { currency: price.currency }
      ),
      priceTitle: intl.formatMessage(
        { id: 'ListingCard.unsupportedPriceTitle' },
        { currency: price.currency }
      ),
    };
  }
  return {};
};

export const ListingCardComponent = props => {
  const { className, rootClassName, intl, listing, setActiveListing } = props;
  const classes = classNames(rootClassName || css.root, className);
  const currentListing = ensureListing(listing);

  const id = currentListing.id.uuid;
  const { title = '', price, publicData } = currentListing.attributes;
  const slug = createSlug(title);
  // const author = ensureUser(listing.author);
  // const authorName = author.attributes.profile.displayName;
  const images =
    currentListing.images && currentListing.images.length > 0 ? currentListing.images : null;

  const { formattedPrice, priceTitle } = priceData(price, intl);

  const unitType = config.bookingUnitType;
  const isNightly = unitType === LINE_ITEM_NIGHT;
  const isDaily = unitType === LINE_ITEM_DAY;

  const unitTranslationKey = isNightly
    ? 'ListingCard.perNight'
    : isDaily
    ? 'ListingCard.perDay'
    : 'ListingCard.perUnit';

  const showDots = images.length > 1;

  const carouselImages = images.map((image, i) => (
    <NamedLink
      className={css.imageLink}
      name="ListingPage"
      params={{ id, slug }}
      key={image.id.uuid}
    >
      <ResponsiveImage
        rootClassName={css.rootForImage}
        alt={title}
        image={image}
        variants={['landscape-crop', 'landscape-crop2x', 'landscape-crop4x', 'landscape-crop6x']}
      />
    </NamedLink>
  ));

  const footfall = calcFootfallAvg(publicData.footfall);

  return (
    <div className={classes}>
      <div
        className={css.threeToTwoWrapper}
        onMouseEnter={() => setActiveListing(currentListing.id)}
        onMouseLeave={() => setActiveListing(null)}
      >
        <div className={css.aspectWrapper}>
          <div className={css.imageContainer}>
            <Carousel
              showThumbs={false}
              showArrows={true}
              showStatus={false}
              infiniteLoop={true}
              showIndicators={showDots}
            >
              {carouselImages}
            </Carousel>
          </div>
        </div>
      </div>
      <NamedLink className={css.infoLink} name="ListingPage" params={{ id, slug }}>
        <div className={css.info}>
          <div className={css.mainInfo}>
            <div className={css.district}>{getDistrict(currentListing)}</div>
            <div className={css.title}>
              {richText(title, {
                longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS,
                longWordClass: css.longWord,
              })}
            </div>
            <div className={css.priceValue} title={priceTitle}>
              {formattedPrice}{' '}
              <FormattedMessage id={unitTranslationKey} values={{ currency: price.currency }} />
            </div>
            {/* <div className={css.authorInfo}>
              <FormattedMessage id="ListingCard.hostedBy" values={{ authorName }} />
            </div> */}
            <div className={css.additionalInfo}>
              <FormattedMessage
                id="ListingCard.area"
                values={{
                  area: publicData.area,
                  sqr: <sup>2</sup>,
                }}
              />
              {footfall ? (
                <span>
                  <b> • </b>
                  <FormattedMessage
                    id="ListingCard.footTraffic"
                    values={{
                      traffic: footfall,
                    }}
                  />
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </NamedLink>
    </div>
  );
};

ListingCardComponent.defaultProps = {
  className: null,
  rootClassName: null,
  renderSizes: null,
  setActiveListing: () => null,
};

ListingCardComponent.propTypes = {
  className: string,
  rootClassName: string,
  intl: intlShape.isRequired,
  listing: propTypes.listing.isRequired,

  // Responsive image sizes hint
  renderSizes: string,

  setActiveListing: func,
};

export default injectIntl(ListingCardComponent);
