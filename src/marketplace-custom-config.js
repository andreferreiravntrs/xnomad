/*
 * Marketplace specific configuration.
 */

export const amenities = [
  {
    key: 'lighting',
    label: 'Lighting',
  },
  {
    key: 'stockroom',
    label: 'Stockroom',
  },
  {
    key: 'bathroom',
    label: 'Bathroom',
  },
  {
    key: 'basement',
    label: 'Basement',
  },
  {
    key: 'wifi',
    label: 'WiFi',
  },
  {
    key: 'parking',
    label: 'Parking',
  },
  {
    key: 'shelves',
    label: 'Shelves',
  },
  {
    key: 'counters',
    label: 'Counters',
  },
  {
    key: 'fittingroom',
    label: 'Fitting room',
  },
  {
    key: 'heating',
    label: 'Heating',
  },
  {
    key: 'securitysystem',
    label: 'Security system',
  },
  {
    key: 'securityshutters',
    label: 'Security shutters',
  },
  {
    key: 'wheelchairaccessible',
    label: 'Wheelchair accessible',
  },
  {
    key: 'sharespace',
    label: 'Shared space',
  },
  {
    key: 'streetlevel',
    label: 'Street level',
  },
  {
    key: 'windowdisplay',
    label: 'Window display',
  },
  {
    key: 'electricity',
    label: 'Electricity',
  },
  {
    key: 'smallkitchen',
    label: 'Small kitchen',
  },
  {
    key: 'stafftoilet',
    label: 'Staff toilet',
  },
];

export const categories = [
  { key: 'retail', label: 'Retail' },
  { key: 'bar', label: 'Bar & Restaurant' },
  { key: 'event', label: 'Event' },
  { key: 'showroom', label: 'Showroom' },
  { key: 'share', label: 'Shop Share' },
  { key: 'mall', label: 'Shopping Mall' },
  { key: 'unique', label: 'Unique' },
];

export const area = 0;

export const areaFilterConfig = {
  min: 0,
  max: 10000,
  step: 10,
};

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 50000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};

// Activate keyword filter on search page

// NOTE: If you are ordering search results by distance the keyword search can't be used at the same time.
// You can turn off ordering by distance in config.js file
export const keywordFilterConfig = {
  active: true,
};
