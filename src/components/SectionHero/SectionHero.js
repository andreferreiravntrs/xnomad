import React, { useState } from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import {
  BookingDateRangeFilter,
  AreaFilter,
  LocationFilter
} from '../../components';
import omit from 'lodash/omit';
import config from '../../config';
import { createResourceLocatorString } from '../../util/routes';
import routeConfiguration from '../../routeConfiguration';
import css from './SectionHero.css';

const FILTER_DROPDOWN_OFFSET = -14;

const SectionHero = ({ history, rootClassName, className, intl }) => {
  const [areaFilter, setAreaFilter] = useState(null);
  const [dateRangeFilter, setDateRangeFilter] = useState({ dates: null });
  const [locationFilter, setLocationFilter] = useState({ id: null, place: null });
  const [urlQueryParams, setUrlQueryParams] = useState({});
  const filters = config.custom.filters;

  const classes = classNames(rootClassName || css.root, className);

  const handleArea = (urlParam, range) => {
    const { minArea, maxArea } = range || {};
    setAreaFilter(range || null);

    const queryParams =
      minArea != null && maxArea != null
        ? { ...urlQueryParams, [urlParam]: `${minArea},${maxArea}` }
        : omit(urlQueryParams, urlParam);
    setUrlQueryParams(queryParams);
  };

  const handleDateRange = (datesRange) => {
    setDateRangeFilter(datesRange);
    setUrlQueryParams(datesRange);
  };

  const handleLocation = (urlParam, place, location) => {
    setLocationFilter({ id: location, place });

    var queryParams = urlQueryParams;
    if (location != null && place != null) {
      const { bounds, address } = place;
      queryParams = { ...urlQueryParams, address, bounds }
    } else {
      queryParams = omit(urlQueryParams, "address", "bounds");
      // SET TO DEFAULT ADDRESS
      // queryParams = omit(urlQueryParams, urlParam);
    }
    setUrlQueryParams(queryParams);
  };

  const handleSubmit = () => {
    history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, urlQueryParams));
  }

  const locationLabel = intl.formatMessage({
    id: 'SearchFilters.locationLabel',
  });

  const areaFiltersConfig = filters.find(f => f.id === "area");
  const areaFilterElement = areaFiltersConfig ? (
    <AreaFilter
      id="SearchFilters.areaFilter"
      onSubmit={handleArea}
      queryParamNames={areaFiltersConfig.queryParamNames}
      showAsPopup
      {...areaFiltersConfig.config}
      initialValues={areaFilter}
      contentPlacementOffset={FILTER_DROPDOWN_OFFSET}
    />
  ) : null;

  const dateFiltersConfig = filters.find(f => f.id === "dates");
  const dateRangeFilterElement = dateFiltersConfig ? (
    <BookingDateRangeFilter
      id="SearchFilters.dateRangeFilter"
      queryParamNames={dateFiltersConfig.queryParamNames}
      onSubmit={handleDateRange}
      {...dateFiltersConfig.config}
      initialValues={dateRangeFilter}
      showAsPopup
      contentPlacementOffset={FILTER_DROPDOWN_OFFSET}
    />
  ) : null;

  const locationFilterElement = (
    <LocationFilter
      urlParam={"location"}
      label={locationLabel}
      onSelect={handleLocation}
      showAsPopup
      intl={intl}
      initialValue={locationFilter}
      contentPlacementOffset={FILTER_DROPDOWN_OFFSET}
    />
  )

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={css.heroMainTitle}>
          <FormattedMessage id="SectionHero.title" />
        </h1>
        <div className={css.heroSearchArea}>
          <div className={css.selectsArea}>
            {areaFilterElement}
            <div className={css.verticalDivider}></div>
            {dateRangeFilterElement}
            <div className={css.verticalDivider}></div>
            {locationFilterElement}
          </div>
          <button type="button" className={css.heroButton} onClick={handleSubmit}>
            <FormattedMessage id="SectionHero.browseButton" />
          </button>
        </div>
      </div>
    </div>
  );
}

SectionHero.defaultProps = {
  rootClassName: null,
  className: null,
};

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
