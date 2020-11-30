import React, { Component } from 'react';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import config from '../../config';
import { NamedLink } from '../../components';
import { formatMoney } from '../../util/currency';
import { createSlug } from '../../util/urlHelpers';
import { getDistrict, calcFootfallAvg } from '../../util/xnomad';
import css from './SectionRelated.css';

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

export default class SectionRelated extends Component {
  constructor() {
    super();
    this.state = { relatedListings: null, images: null };
    this.getRelatedListings = this.getRelatedListings.bind(this);
  }

  getRelatedListings() {
    const { currentListing } = this.props;

    const sdk = sharetribeSdk.createInstance({
      clientId: config.sdk.clientId,
    });

    sdk.listings
      .query({
        origin: [
          currentListing.attributes.geolocation.lat,
          currentListing.attributes.geolocation.lng,
        ],
        include: ['images'],
        'fields.image': ['variants.square-small2x'],
      })
      .then(res => {
        const listings = res.data.data
          .filter(
            listing =>
              listing.attributes.state === 'published' && listing.id.uuid !== currentListing.id.uuid
          )
          .slice(0, 4);

        this.setState({ relatedListings: listings, images: res.data.included });
      });
  }

  componentDidMount() {
    this.getRelatedListings();
  }

  render() {
    const { className, intl, rootClassName } = this.props;
    const classes = classNames(rootClassName || css.root, className);

    if (!this.state.relatedListings) {
      return null;
    }

    return (
      <div className={css.sectionRelated}>
        <div className={css.relatedListingsContainer}>
          <div className={css.title}>
            <FormattedMessage id="ListingPage.related.title" />
          </div>
          <div className={css.relatedListings}>
            {this.state.relatedListings.map(listing => {
              if (listing.attributes.state === 'published') {
                const imageId = listing.relationships.images.data[0].id.uuid;
                const image = this.state.images.find(image => image.id.uuid === imageId);
                const imageSrc = image.attributes.variants['square-small2x'].url;

                const { formattedPrice, priceTitle } = priceData(listing.attributes.price, intl);
                const footfall = calcFootfallAvg(listing.attributes.publicData.footfall)

                const id = listing.id.uuid;
                const slug = createSlug(listing.attributes.title);

                return (
                  <NamedLink
                    className={classNames(classes, css.cardWrapper)}
                    name="ListingPage"
                    params={{ id, slug }}
                    key={listing.id.uuid}
                  >
                    <div className={css.relatedListing}>
                      <div className={css.relatedListingImageSection}>
                        <img src={imageSrc} alt="" className={css.relatedListingImage} />
                      </div>
                      <div className={css.relatedListingBottomSection}>
                        <div className={css.relatedListingArea}>{getDistrict(listing)}</div>
                        <h4 className={css.relatedListingName}>{listing.attributes.title}</h4>
                        <div>
                          <div className={css.relatedListingPrice} title={priceTitle}>
                            {formattedPrice + ' '}
                          </div>
                          <div className={css.relatedListingCurrency}>
                            <FormattedMessage
                              id={'BookingPanel.perDay'}
                              values={{ currency: listing.attributes.price.currency }}
                            />
                          </div>
                          <div className={css.additionalInfo}>
                            <FormattedMessage
                              id="ListingCard.area"
                              values={{
                                area: listing.attributes.publicData.area,
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
                    </div>
                  </NamedLink>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    );
  }
}
