import React from 'react';
import { withRouter } from 'react-router-dom';
import { stringify, parse } from '../../util/urlHelpers';

import LocationFilter from './LocationFilter';

const URL_PARAM = 'pub_price';
const RADIX = 10;

// Helper for submitting example
const handleSubmit = (urlParam, values, history) => {
  const { minPrice, maxPrice } = values || {};
  const queryParams =
    minPrice != null && maxPrice != null
      ? `?${stringify({ [urlParam]: [minPrice, maxPrice].join(',') })}`
      : '';
  history.push(`${window.location.pathname}${queryParams}`);
};

const LocationFilterWrapper = withRouter(props => {
  const { history, location } = props;

  const params = parse(location.search);
  const price = params[URL_PARAM];
  const valuesFromParams = !!price ? price.split(',').map(v => Number.parseInt(v, RADIX)) : [];
  const initialValues = !!price
    ? {
        minPrice: valuesFromParams[0],
        maxPrice: valuesFromParams[1],
      }
    : null;

  return (
    <LocationFilter
      {...props}
      initialValues={initialValues}
      onSubmit={(urlParam, values) => {
        console.log('Submit LocationFilterForm with (unformatted) values:', values);
        handleSubmit(urlParam, values, history);
      }}
    />
  );
});

export const LocationFilterPopup = {
  component: LocationFilterWrapper,
  props: {
    id: 'LocationFilterPopupExample',
    urlParam: URL_PARAM,
    min: 0,
    max: 1000,
    step: 5,
    liveEdit: false,
    showAsPopup: true,
    contentPlacementOffset: -14,
    // initialValues: handled inside wrapper
    // onSubmit: handled inside wrapper
  },
  group: 'misc',
};

export const LocationFilterPlain = {
  component: LocationFilterWrapper,
  props: {
    id: 'LocationFilterPlainExample',
    urlParam: URL_PARAM,
    min: 0,
    max: 1000,
    step: 5,
    liveEdit: true,
    showAsPopup: false,
    contentPlacementOffset: -14,
    // initialValues: handled inside wrapper
    // onSubmit: handled inside wrapper
  },
  group: 'misc',
};
