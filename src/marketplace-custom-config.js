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
  /*
  * Every filter needs to have following keys:
  * - id:     Unique id of the filter.
  * - label:  The default label of the filter.
  * - type:   String that represents one of the existing filter components:
  *           BookingDateRangeFilter, KeywordFilter, PriceFilter,
  *           SelectSingleFilter, SelectMultipleFilter.
  * - group:  Is this 'primary' or 'secondary' filter?
  *           Primary filters are visible on desktop layout by default.
  *           Secondary filters are behind "More filters" button.
  *           Read more from src/containers/SearchPage/README.md
  * - queryParamNames: Describes parameters to be used with queries
  *                    (e.g. 'price' or 'pub_amenities'). Most of these are
  *                    the same between webapp URLs and API query params.
  *                    You can't change 'dates', 'price', or 'keywords'
  *                    since those filters are fixed to a specific attribute.
  * - config: Extra configuration that the filter component needs.
  *
  * Note 1: Labels could be tied to translation file
  *         by importing FormattedMessage:
  *         <FormattedMessage id="some.translation.key.here" />
  *
  * Note 2: If you need to add new custom filter components,
  *         you need to take those into use in:
  *         src/containers/SearchPage/FilterComponent.js
  *
  * Note 3: If you just want to create more enum filters
  *         (i.e. SelectSingleFilter, SelectMultipleFilter),
  *         you can just add more configurations with those filter types
  *         and tie them with correct extended data key
  *         (i.e. pub_<key> or meta_<key>).
  */
}

export const filters = [
  {
    id: 'category',
    label: 'Category',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_category'],
    config: {
      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'retail', label: 'Retail' },
        { key: 'bar', label: 'Bar & Restaurant' },
        { key: 'event', label: 'Event' },
        { key: 'showroom', label: 'Showroom' },
        { key: 'share', label: 'Shop Share' },
        { key: 'mall', label: 'Shopping Mall' },
        { key: 'unique', label: 'Unique' },
      ],
    },
  },
  {
    id: 'amenities',
    label: 'Amenities',
    type: 'SelectMultipleFilter',
    group: 'primary',
    queryParamNames: ['pub_amenities'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',

      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
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
      ],
    },
  },
  {
    id: 'price',
    label: 'Price',
    type: 'PriceFilter',
    group: 'primary',
    // Note: PriceFilter is fixed filter,
    // you can't change "queryParamNames: ['price'],"
    queryParamNames: ['price'],
    // Price filter configuration
    // Note: unlike most prices this is not handled in subunits
    config: {
      min: 0,
      max: 1000,
      step: 5,
    },
  },
  {
    id: 'area',
    label: 'Area',
    type: 'AreaFilter',
    group: 'primary',
    // Note: PriceFilter is fixed filter,
    // you can't change "queryParamNames: ['price'],"
    queryParamNames: ['pub_area'],
    // Price filter configuration
    // Note: unlike most prices this is not handled in subunits
    config: {
      min: 0,
      max: 10000,
      step: 10,
    },
  },
  {
    id: 'dates',
    label: 'Dates',
    type: 'BookingDateRangeFilter',
    group: 'primary',
    // Note: BookingDateRangeFilter is fixed filter,
    // you can't change "queryParamNames: ['dates'],"
    queryParamNames: ['dates'],
    config: {},
  },
  {
    id: 'keyword',
    label: 'Keyword',
    type: 'KeywordFilter',
    group: 'primary',
    // Note: KeywordFilter is fixed filter,
    // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {},
  },
];

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: false,

  // Note: queryParamName 'sort' is fixed,
  // you can't change it since Flex API expects it to be named as 'sort'
  queryParamName: 'sort',

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  // Keyword filter is sorting the results already by relevance.
  // If keyword filter is active, we need to disable sorting.
  conflictingFilters: ['keyword'],

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};
