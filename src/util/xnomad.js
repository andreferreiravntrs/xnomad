export const CITY_TYPES = ['postal_town', 'locality'];
export const DISTRICT_TYPES = ['sublocality', 'political'];
export const STREET_TYPES = ['route', 'premise'];

/**
 * Filters address components by address types
 *
 * For a list of available address types, see
 * https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingAddressTypes
 *
 * @param {Array} components - list of address components
 * @param {Array} types - list of address types
 *
 * @returns {String} - short name of a single type
 */
export const filterAddressComponents = (components, types) => {
  const filteredComps = components.filter(c => c.types.some(t => types.indexOf(t) >= 0));
  return filteredComps.length > 0 ? filteredComps[0].short_name : null;
};

/**
 * Gets a string describing the listing's district
 *
 * @param {Object} listing - Listing object
 *
 * @returns {String} - "CITY, DISTRICT"
 */
export const getDistrict = listing => {
  const addressComponents = listing.attributes.publicData.location.addressComponents;
  if (!addressComponents) {
    return null;
  }
  const city = filterAddressComponents(addressComponents, CITY_TYPES);
  const district = filterAddressComponents(addressComponents, DISTRICT_TYPES);

  return city + ', ' + district;
};

/**
 * Gets the foot traffic passing by a listing per day.
 * Returns null if foot traffic data is unknown at the specified location.
 *
 * @param {Object} listing - Listing object
 *
 * @returns {String} - Estimated number of people passing by per day
 */
export const calcFootfallAvg = footfall => {
  if (!footfall) {
    return null;
  }

  let avg = 0;
  Object.keys(footfall).forEach(key => {
    avg += parseInt(footfall[key], 10);
  });
  avg = parseInt(avg / 7, 10).toString();
  avg = avg.split(/(?=(?:...)*$)/);
  return avg.join(' ');
};

export const calcFootfall = footfall => {
  if (!footfall) {
    return null;
  }

  let avg = 0;
  Object.keys(footfall).forEach(key => {
    avg += parseInt(footfall[key], 10);
  });
  avg = parseInt(avg, 10).toString();
  avg = avg.split(/(?=(?:...)*$)/);
  return avg.join(' ');
};
