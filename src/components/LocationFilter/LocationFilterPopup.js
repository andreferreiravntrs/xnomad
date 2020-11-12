import React, { Component } from 'react';
import { string, func, number, bool, object } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { Menu, MenuContent, MenuItem, MenuLabel } from '..';
import { defaultPredictions } from "../LocationAutocompleteInput/LocationAutocompleteInputImpl";
import Geocoder, { GeocoderAttribution, CURRENT_LOCATION_ID } from '../LocationAutocompleteInput/GeocoderGoogleMaps';
import IconCurrentLocation from '../LocationAutocompleteInput/IconCurrentLocation';

import css from './LocationFilterPopup.css';

const optionLabel = (options, initialValue, geocoder, intl) => {
  const option = options.find(o => o.id === initialValue.id);

  const currentLocationLabel = intl.formatMessage({
    id: 'LocationAutocompleteInput.currentLocation',
  });

  if (option && option.id === CURRENT_LOCATION_ID) {
    return currentLocationLabel;
  } else {
    return option ? geocoder.getPredictionAddress(option) : initialValue.id;
  }
};

class LocationFilterPopup extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = { isOpen: false };
    this.onToggleActive = this.onToggleActive.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onToggleActive(isOpen) {
    this.setState({ isOpen: isOpen });
  }

  selectOption(urlParam, option) {
    this.setState({ isOpen: false });
    if (option) {
      this.selectPrediction(option)
    } else {
      this.props.onSelect(this.props.urlParam, null, null);
    }
  }

  selectPrediction(prediction) {
    this.props.onSelect(this.props.urlParam, null, null);

    this.setState({ fetchingPlaceDetails: true });

    this.getGeocoder()
      .getPlaceDetails(prediction)
      .then(place => {
        if (!this._isMounted) {
          // Ignore if component already unmounted
          return;
        }
        this.setState({ fetchingPlaceDetails: false });
        this.props.onSelect(this.props.urlParam, place, prediction.id);
      })
      .catch(e => {
        this.setState({ fetchingPlaceDetails: false });
        // eslint-disable-next-line no-console
        console.error(e);
        this.props.onSelect(this.props.urlParam, null, null);
      });
  }

  getGeocoder() {
    // Create the Geocoder as late as possible only when it is needed.
    if (!this._geocoder) {
      this._geocoder = new Geocoder();
    }
    return this._geocoder;
  }

  render() {
    const {
      rootClassName,
      className,
      urlParam,
      label,
      initialValue,
      contentPlacementOffset,
      bottomActions,
      intl
    } = this.props;

    const options = defaultPredictions;

    var geocoder = this.getGeocoder();

    // resolve menu label text and class
    const menuLabel = (initialValue && initialValue.id) ? optionLabel(options, initialValue, geocoder, intl) : label;
    const menuLabelClass = (initialValue && initialValue.id) ? css.labelSelected : css.label;

    const classes = classNames(rootClassName || css.root, className);
    const bottomActionsEl = (bottomActions) ?
      <MenuItem key={'bottomActions'}>
        <button className={css.clearMenuItem} onClick={() => this.selectOption(urlParam, null)}>
          <FormattedMessage id={'LocationFilter.clear'} />
        </button>
      </MenuItem>
      : <MenuItem key={'bottomActions'}></MenuItem>;

    return (
      <Menu
        className={classes}
        useArrow={false}
        contentPlacementOffset={contentPlacementOffset}
        onToggleActive={this.onToggleActive}
        isOpen={this.state.isOpen}
      >
        <MenuLabel className={menuLabelClass}>{menuLabel}</MenuLabel>
        <MenuContent className={css.menuContent}>
          {options.map(option => {
            // check if this option is selected
            const selected = initialValue && initialValue.id === option.id;
            // menu item border class
            const menuItemBorderClass = selected ? css.menuItemBorderSelected : css.menuItemBorder;
            const predictionId = geocoder.getPredictionId(option);

            return (
              <MenuItem key={option.id}>
                <button
                  className={css.menuItem}
                  onClick={() => {
                    this.selectOption(urlParam, option);
                  }}
                >
                  <span className={menuItemBorderClass} />
                  {
                    predictionId === CURRENT_LOCATION_ID ? (
                      <span>
                        <IconCurrentLocation />
                        <FormattedMessage id="LocationAutocompleteInput.currentLocation" />
                      </span>
                    ) : (
                        geocoder.getPredictionAddress(option)
                      )
                  }
                </button>
              </MenuItem>
            );
          })}
          <MenuItem key="GeocoderAttribution" ><GeocoderAttribution className={css.GeocoderAttribution} /></MenuItem>
          {bottomActionsEl}
        </MenuContent>
      </Menu>
    );
  }
}

LocationFilterPopup.defaultProps = {
  rootClassName: null,
  className: null,
  initialValue: null,
  contentPlacementOffset: 0,
  bottomActions: true,
};

LocationFilterPopup.propTypes = {
  rootClassName: string,
  className: string,
  urlParam: string.isRequired,
  label: string.isRequired,
  onSelect: func.isRequired,
  initialValue: object,
  contentPlacementOffset: number,
  bottomActions: bool,
};

export default LocationFilterPopup;
