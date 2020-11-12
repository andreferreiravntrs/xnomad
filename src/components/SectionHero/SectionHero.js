import React, { useState } from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import {
  BookingDateRangeFilter,
  AreaFilter,
  LocationFilter
} from '../../components';
import omit from 'lodash/omit';
import { stringifyDateToISO8601 } from '../../util/dates';
import config from '../../config';
import { createResourceLocatorString } from '../../util/routes';
import routeConfiguration from '../../routeConfiguration';
import css from './SectionHero.css';

const FILTER_DROPDOWN_OFFSET = -14;

const SectionHero = ({ history, rootClassName, className, intl, areaFilterConfig, dateRangeFilterConfig, keywordFilterConfig }) => {
  const [areaFilter, setAreaFilter] = useState(null);
  const [dateRangeFilter, setDateRangeFilter] = useState({ dates: null });
  const [locationFilter, setLocationFilter] = useState({ id: null, place: null });
  const [urlQueryParams, setUrlQueryParams] = useState({});

  const filters = {
    areaFilter: {
      paramName: 'pub_area',
      config: areaFilterConfig,
    },
    dateRangeFilter: {
      paramName: 'dates',
      config: dateRangeFilterConfig,
    }
  };

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

  const handleDateRange = (urlParam, dateRange) => {
    const hasDates = dateRange && dateRange.dates;
    const { startDate, endDate } = hasDates ? dateRange.dates : {};
    const daterangefilter = hasDates ? { dates: dateRange.dates } : { dates: null };
    setDateRangeFilter(daterangefilter);

    const start = startDate ? stringifyDateToISO8601(startDate) : null;
    const end = endDate ? stringifyDateToISO8601(endDate) : null;

    const queryParams =
      start != null && end != null
        ? { ...urlQueryParams, [urlParam]: `${start},${end}` }
        : omit(urlQueryParams, urlParam);
    setUrlQueryParams(queryParams);
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

  const areaFilterElement = filters.areaFilter ? (
    <AreaFilter
      id="SearchFilters.areaFilter"
      onSubmit={handleArea}
      urlParam={filters.areaFilter.paramName}
      showAsPopup
      {...filters.areaFilter.config}
      initialValues={areaFilter}
      contentPlacementOffset={FILTER_DROPDOWN_OFFSET}
    />
  ) : null;

  const dateRangeFilterElement =
    filters.dateRangeFilter && filters.dateRangeFilter.config.active ? (
      <BookingDateRangeFilter
        id="SearchFilters.dateRangeFilter"
        urlParam={filters.dateRangeFilter.paramName}
        onSubmit={handleDateRange}
        {...filters.dateRangeFilter.config}
        showAsPopup
        contentPlacementOffset={FILTER_DROPDOWN_OFFSET}
        initialValues={dateRangeFilter}
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
  areaFilterConfig: config.custom.areaFilterConfig,
  dateRangeFilterConfig: config.custom.dateRangeFilterConfig,
  keywordFilterConfig: config.custom.keywordFilterConfig,
};

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
