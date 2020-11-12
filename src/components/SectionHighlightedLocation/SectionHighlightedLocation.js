import React, { useEffect, useState } from 'react';
import { string, object } from 'prop-types';
import { intlShape, FormattedMessage } from 'react-intl';
import config from '../../config';
import classNames from 'classnames';
import css from './SectionHighlightedLocation.css';
import { createSlug } from '../../util/urlHelpers';
import { formatMoney } from '../../util/currency';
import { calcFootfall, filterAddressComponents, CITY_TYPES, DISTRICT_TYPES } from '../../util/xnomad';
import { createResourceLocatorString } from '../../util/routes';
import routeConfiguration from '../../routeConfiguration';

const sharetribeSdk = require('sharetribe-flex-sdk');

const priceData = (price, intl) => {
  if (price && price.currency === config.currency) {
    const formattedPrice = formatMoney(intl, price);
    return { formattedPrice, priceTitle: formattedPrice };
  } else if (price) {
    return {
      formattedPrice: `(${price.currency})`,
      priceTitle: `Unsupported currency (${price.currency})`,
    };
  }
  return {};
};

const SectionHighlightedLocation = ({ history, intl, className }) => {
  const [listings, setListings] = useState([]);
  const [featuredItem, setFeaturedItem] = useState(null);

  const fetchFeaturedItem = () => {
    const sdk = sharetribeSdk.createInstance({
      clientId: config.sdk.clientId,
    });

    let featuredLocation = null;

    sdk.listings
      .query({
        include: ['images'],
        'fields.image': ['variants.square-small2x'],
        "meta_highlighted": true,
      }).then(res => {
        if (res.data.data) {
          featuredLocation = res.data.data[0];

          if (featuredLocation && featuredLocation.attributes) {
            const addressComponents = featuredLocation.attributes.publicData.location.addressComponents;
            if (addressComponents) {
              featuredLocation.district =
                filterAddressComponents(addressComponents, CITY_TYPES) +
                ', ' +
                filterAddressComponents(addressComponents, DISTRICT_TYPES);
            }
          }
          setListings(res.data);
          setFeaturedItem(featuredLocation);
        }
      });
  }

  useEffect(fetchFeaturedItem, []);

  const handleOnClick = (e, params) => {
    history.push(createResourceLocatorString('ListingPage', routeConfiguration(), params, {}))
  }

  if (listings && listings.data && featuredItem) {
    const imageId = featuredItem.relationships.images.data[0].id.uuid;
    const image = listings.included.find(image => image.id.uuid === imageId);
    const imageSrc = image.attributes.variants['square-small2x'].url;

    const { formattedPrice, priceTitle } = priceData(featuredItem.attributes.price, intl);

    const id = featuredItem.id.uuid;
    const slug = createSlug(featuredItem.attributes.title);
    const footfall = calcFootfall(featuredItem.attributes.publicData.footfall);
    
    return (
      <section className={css.root}>
        <div className={classNames(css.container, className)}>
          <div className={css.row}>
            <h4 className={css.h4}>
              <FormattedMessage id="SectionHighlightedLocation.title" />
            </h4>
          </div>
          <div className={css.row}>
            <div className={css.item} style={{ backgroundImage: `url('${imageSrc}')` }}></div>
            <div className={css.card} onClick={(e) => { handleOnClick(e, { id, slug }) }}>
              <div className={css.cardContent}
              >
                <div className={css.cardCol}>
                  {(featuredItem.district) ? <div className={css.cardPreTitle}>{featuredItem.district}</div> : null}
                  <div className={css.cardTitle}>{featuredItem.attributes.title}</div>
                  <h6 className={css.cardSubTitle}>
                    <span title={priceTitle}>{formattedPrice}</span> <FormattedMessage
                      id={'BookingPanel.perWeek'}
                      values={{ currency: featuredItem.attributes.price.currency }}
                    />
                  </h6>
                  <div className={css.cardBottomDetails}>
                    <FormattedMessage
                      id="ListingCard.area"
                      values={{
                        area: featuredItem.attributes.publicData.area,
                        sqr: <sup>2</sup>,
                      }}
                    />{footfall ? (
                      <span>
                        <b> • </b>
                        <FormattedMessage
                          id="ListingCard.footTrafficWeek"
                          values={{
                            traffic: footfall,
                          }}
                        />
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className={classNames(css.cardCol, css.rightCol)}>
                  <div className={css.cardDescription}>
                    {featuredItem.attributes.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}

SectionHighlightedLocation.defaultProps = {
  className: null
};

SectionHighlightedLocation.propTypes = {
  className: string,
  intl: intlShape.isRequired,
  history: object.isRequired,
};

export default SectionHighlightedLocation;
