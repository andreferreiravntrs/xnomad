import React from 'react';
import { bool } from 'prop-types';
import LocationFilterPopup from './LocationFilterPopup';

const LocationFilter = props => {
  const { showAsPopup, ...rest } = props;
  return <LocationFilterPopup {...rest} />;
};

LocationFilter.defaultProps = {
  showAsPopup: false,
};

LocationFilter.propTypes = {
  showAsPopup: bool,
};

export default LocationFilter;
