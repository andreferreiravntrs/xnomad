import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import Geocode from 'react-geocode';
import config from '../../config';
import { LISTING_STATE_DRAFT } from '../../util/types';
import { ensureOwnListing } from '../../util/data';
import { ListingLink } from '../../components';
import { EditListingLocationForm } from '../../forms';

import css from './EditListingLocationPanel.css';

class EditListingLocationPanel extends Component {
  constructor(props) {
    super(props);

    this.getInitialValues = this.getInitialValues.bind(this);

    this.state = {
      initialValues: this.getInitialValues(),
    };
  }

  getInitialValues() {
    const { listing } = this.props;
    const currentListing = ensureOwnListing(listing);
    const { geolocation, publicData } = currentListing.attributes;

    // Only render current search if full place object is available in the URL params
    // TODO bounds are missing - those need to be queried directly from Google Places
    const locationFieldsPresent =
      publicData && publicData.location && publicData.location.address && geolocation;
    const location = publicData && publicData.location ? publicData.location : {};
    const { address, building } = location;

    return {
      building,
      location: locationFieldsPresent
        ? {
            search: address,
            selectedPlace: { address, origin: geolocation },
          }
        : null,
    };
  }

  async loadGeoData(location) {
    Geocode.setApiKey(config.maps.googleMapsAPIKey);
    const lat = location.lat;
    const lng = location.lng;
    let addressComponents;

    try {
      const response = await Geocode.fromLatLng(lat, lng);
      addressComponents =
        response.results.length > 0 ? response.results[0].address_components : null;
    } catch (error) {
      console.log(error);
      return null;
    }
    const footfall = await this.loadFootfallData(lat, lng);

    return { addressComponents, footfall };
  }

  async loadFootfallData(lat, lng) {
    const apiUrl =
      process.env.REACT_APP_ENV === 'production'
        ? 'https://xnomad-staging.herokuapp.com'
        : process.env.REACT_APP_ENV === 'test'
        ? 'https://xnomad-staging.herokuapp.com'
        : 'http://localhost:4000';
    const response = await fetch(apiUrl + '/api/footfall?lat=' + lat + '&lng=' + lng);
    const data = await response.json();
    return data;
  }

  render() {
    const {
      className,
      rootClassName,
      listing,
      disabled,
      ready,
      onSubmit,
      onChange,
      submitButtonText,
      panelUpdated,
      updateInProgress,
      errors,
    } = this.props;

    const classes = classNames(rootClassName || css.root, className);
    const currentListing = ensureOwnListing(listing);

    const isPublished =
      currentListing.id && currentListing.attributes.state !== LISTING_STATE_DRAFT;
    const panelTitle = isPublished ? (
      <FormattedMessage
        id="EditListingLocationPanel.title"
        values={{ listingTitle: <ListingLink listing={listing} /> }}
      />
    ) : (
      <FormattedMessage id="EditListingLocationPanel.createListingTitle" />
    );

    return (
      <div className={classes}>
        <h1 className={css.title}>{panelTitle}</h1>
        <EditListingLocationForm
          className={css.form}
          initialValues={this.state.initialValues}
          onSubmit={values => {
            const { building = '', location } = values;
            const {
              selectedPlace: { address, origin },
            } = location;
            this.setState({
              initialValues: {
                building,
                location: { search: address, selectedPlace: { address, origin } },
              },
            });

            this.loadGeoData(location.selectedPlace.origin).then(
              addressInfo => {
                const footfall = {};
                addressInfo.footfall.forEach(f => {
                  footfall[f.weekday] = f.average_activities;
                });
                const updateValues = {
                  geolocation: origin,
                  publicData: {
                    location: {
                      address,
                      building,
                      addressComponents: addressInfo.addressComponents,
                    },
                    footfall,
                  },
                };
                onSubmit(updateValues);
              },
              error => {
                console.log(error);
              }
            );
          }}
          onChange={onChange}
          saveActionMsg={submitButtonText}
          disabled={disabled}
          ready={ready}
          updated={panelUpdated}
          updateInProgress={updateInProgress}
          fetchErrors={errors}
        />
      </div>
    );
  }
}

const { func, object, string, bool } = PropTypes;

EditListingLocationPanel.defaultProps = {
  className: null,
  rootClassName: null,
  listing: null,
};

EditListingLocationPanel.propTypes = {
  className: string,
  rootClassName: string,

  // We cannot use propTypes.listing since the listing might be a draft.
  listing: object,

  disabled: bool.isRequired,
  ready: bool.isRequired,
  onSubmit: func.isRequired,
  onChange: func.isRequired,
  submitButtonText: string.isRequired,
  panelUpdated: bool.isRequired,
  updateInProgress: bool.isRequired,
  errors: object.isRequired,
};

export default EditListingLocationPanel;
