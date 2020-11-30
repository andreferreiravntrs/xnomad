import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import config from '../../config';
import classNames from 'classnames';
import AliceCarousel from 'react-alice-carousel';
import css from './SectionLocations.css';
import { createSlug } from '../../util/urlHelpers';
import { formatMoney } from '../../util/currency';
import { calcFootfallAvg, filterAddressComponents, CITY_TYPES, DISTRICT_TYPES } from '../../util/xnomad';
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

const FEATURED_ITEMS_SMALL = 1;
const FEATURED_ITEMS_MEDIUM = 2;
const FEATURED_ITEMS_LARGE = 3;

class SectionLocations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
      featuredLocations: [],
      infinite: false,
    };
    this.getFeaturedListings = this.getFeaturedListings.bind(this);
    this.isInfinite = this.isInfinite.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.isInfinite.bind(this));

    const sdk = sharetribeSdk.createInstance({
      clientId: config.sdk.clientId,
    });

    let featuredLocations = null;

    sdk.listings
      .query({
        include: ['images'],
        'fields.image': ['variants.square-small2x'],
        "meta_featured": true,
      })
      .then(res => {
        if (res.data.data) {
          featuredLocations = res.data.data.filter(
            listing =>
              listing.attributes &&
              listing.attributes.metadata &&
              listing.attributes.metadata.featured
          );
        }
        featuredLocations.forEach(listing => {
          const addressComponents = listing.attributes.publicData.location.addressComponents;
          if (addressComponents) {
            listing.district =
              filterAddressComponents(addressComponents, CITY_TYPES) +
              ', ' +
              filterAddressComponents(addressComponents, DISTRICT_TYPES);
          }
          this.setState(
            {
              listings: res.data,
              featuredLocations: featuredLocations,
            },
            () => this.isInfinite()
          );
        });
      });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.isInfinite.bind(this));
  }

  formatPrice(price) {
    return price.substring(0, price.length - 2) + '.' + price.substring(price.length - 2);
  }

  getFeaturedListings(limit = null) {
    const { intl, history } = this.props;
    const COORDS = {
      xDown: null,
      xUp: null
    }

    const handleOnMouseDown = e => {
      e.preventDefault()
      COORDS.xUp = null
      COORDS.xDown = null

      COORDS.xDown = e.clientX
    }

    const handleMouseUp = e => {
      e.preventDefault()
      COORDS.xUp = e.clientX
    }

    return (
      this.state.listings.data &&
      this.state.featuredLocations.slice(0, limit || (this.state.featuredLocations.length)).map(listing => {
        if (listing.attributes.state === 'published') {
          const imageId = listing.relationships.images.data[0].id.uuid;
          const image = this.state.listings.included.find(image => image.id.uuid === imageId);
          const imageSrc = image.attributes.variants['square-small2x'].url;

          const { formattedPrice, priceTitle } = priceData(listing.attributes.price, intl);

          const id = listing.id.uuid;
          const slug = createSlug(listing.attributes.title);

          const footfall = calcFootfallAvg(listing.attributes.publicData.footfall);

          const handleOnClick = (e, params) => {
            if (COORDS.xDown !== COORDS.xUp) {
              e.preventDefault()
            } else {
              history.push(createResourceLocatorString('ListingPage', routeConfiguration(), params, {}))
            }
          }

          return (
            <div
              className={css.item}
              key={listing.id.uuid}
              onMouseDown={handleOnMouseDown}
              onMouseUp={handleMouseUp}
              onClick={(e) => { handleOnClick(e, { id, slug }) }}
            >
              <div className={css.card}>
                <div className={css.cardHeader} style={{ backgroundImage: `url('${imageSrc}')` }}></div>
                <div className={css.cardContent}>
                  {(listing.district) ? <div className={classNames(css.cardPreTitle, css.desktop)}>{listing.district}</div> : null}
                  <h5 className={css.cardTitle}>{listing.attributes.title}</h5>
                  <h6 className={css.cardSubTitle}>
                    <span className={css.fromSpan}><FormattedMessage id={'BookingPanel.from'} /></span> <span title={priceTitle}>{formattedPrice}</span> <FormattedMessage
                      id={'BookingPanel.perDay'}
                      values={{ currency: listing.attributes.price.currency }}
                    />
                  </h6>
                  <div className={classNames(css.cardBottomDetails, css.desktop)}>
                  <FormattedMessage
                      id="ListingCard.area"
                      values={{
                        area: listing.attributes.publicData.area,
                        sqr: <sup>2</sup>,
                      }}
                    />{footfall ? (
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
          );
        }
        return null;
      })
    );
  }

  isInfinite() {
    if (
      (window.innerWidth < 768 && this.state.featuredLocations.length > FEATURED_ITEMS_SMALL) ||
      (window.innerWidth < 1024 && this.state.featuredLocations.length > FEATURED_ITEMS_MEDIUM) ||
      this.state.featuredLocations.length > FEATURED_ITEMS_LARGE
    ) {
      this.setState({ infinite: true });
    } else {
      this.setState({ infinite: false });
    }
  }

  render() {
    const { className, history } = this.props;

    const handleBrowseSpaces = () => {
      history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, {}));
    }

    return (
      <section className={css.root}>
        <div className={classNames(css.container, css.desktop, className)}>
          <div className={classNames(css.row, css.spaceBetween)}>
            <h4 className={css.h4}>
              <FormattedMessage id="SectionLocations.title" />
            </h4>
            <button type="button" className={css.browseSpacesBtn} onClick={handleBrowseSpaces}>
              <FormattedMessage id="SectionLocations.browseButton" /><span className={css.arrowSymbol}>→</span>
            </button>
          </div>
          <div className={css.row}>
            <div className={css.carouselContainer}>
              <AliceCarousel
                items={this.getFeaturedListings()}
                responsive={{
                  0: { items: FEATURED_ITEMS_SMALL },
                  767: { items: FEATURED_ITEMS_MEDIUM },
                  1023: { items: FEATURED_ITEMS_LARGE },
                }}
                autoHeight={true}
                infinite={false}
                buttonsDisabled={true}
                stagePadding={{
                  paddingLeft: 0,
                  paddingRight: 616
                }}
                dotsDisabled={true}
                keysControlDisabled={true}
                autoPlay={true}
                mouseTrackingEnabled={true}
                autoPlayInterval={5000}
              />
            </div>
          </div>
        </div>
        <div className={classNames(css.container, css.mobile, className)}>
          <div className={classNames(css.row, css.stretch)}>
            <h4 className={css.h4}>
              <FormattedMessage id="SectionLocations.title" />
            </h4>
          </div>
          <div className={css.row}>
            {this.getFeaturedListings(4)}
          </div>
          <div className={classNames(css.row, css.stretch)}>
            <button type="button" className={css.browseSpacesBtn} onClick={handleBrowseSpaces}>
              <FormattedMessage id="SectionLocations.browseButton" /><span className={css.arrowSymbol}>→</span>
            </button>
          </div>
        </div>

      </section>
    );
  }
}

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string, object } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
  history: object.isRequired,
};

export default SectionLocations;
