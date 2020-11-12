import React from 'react';
import { withRouter } from 'react-router-dom';
import { stringify, parse } from '../../util/urlHelpers';

import AreaFilter from './AreaFilter';

const URL_PARAM = 'pub_area';
const RADIX = 10;

// Helper for submitting example
const handleSubmit = (urlParam, values, history) => {
  const { minArea, maxArea } = values || {};
  const queryParams =
    minArea != null && maxArea != null
      ? `?${stringify({ [urlParam]: [minArea, maxArea].join(',') })}`
      : '';
  history.push(`${window.location.pathname}${queryParams}`);
};

const AreaFilterWrapper = withRouter(props => {
  const { history, location } = props;

  const params = parse(location.search);
  const area = params[URL_PARAM];
  const valuesFromParams = !!area ? area.split(',').map(v => Number.parseInt(v, RADIX)) : [];
  const initialValues = !!area
    ? {
        minArea: valuesFromParams[0],
        maxArea: valuesFromParams[1],
      }
    : null;

  return (
    <AreaFilter
      {...props}
      initialValues={initialValues}
      onSubmit={(urlParam, values) => {
        console.log('Submit AreaFilterForm with (unformatted) values:', values);
        handleSubmit(urlParam, values, history);
      }}
    />
  );
});

export const AreaFilterPopup = {
  component: AreaFilterWrapper,
  props: {
    id: 'AreaFilterPopupExample',
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

export const AreaFilterPlain = {
  component: AreaFilterWrapper,
  props: {
    id: 'AreaFilterPlainExample',
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
