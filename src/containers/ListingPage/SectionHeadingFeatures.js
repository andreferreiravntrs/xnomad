import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import css from './ListingPage.css';

import SqrMeter from './svg/box.svg'
import Retail from './svg/retail.svg'
import Bar from './svg/restaurant.svg'
import Shared from './svg/shared.svg'
import Unique from './svg/star.svg'
import Event from './svg/event.svg'

const SectionHeadingFeatures = props => {
  const {
      area,
      categories
  } = props;

  return (
    <div className={css.sectionHeadingFeatures}>
      <div className={css.sectionHeadingFeature}>
        <img src={SqrMeter} alt='' className={css.sectionHeadingIcon} />
        {area}
      </div>
      <div className={classNames(css.sectionHeadingFeature, (categories.indexOf("retail") > -1 ? "" : css.faded))}>
        <img src={Retail} alt='' className={css.sectionHeadingIcon} />
        <FormattedMessage id="ListingPage.features.retail" />
      </div>
      <div className={classNames(css.sectionHeadingFeature, (categories.indexOf("bar") > -1 ? "" : css.faded))}>
        <img src={Bar} alt='' className={css.sectionHeadingIcon} />
        <FormattedMessage id="ListingPage.features.bar" />
      </div>
      <div className={classNames(css.sectionHeadingFeature, (categories.indexOf("event") > -1 ? "" : css.faded))}>
        <img src={Event} alt='' className={css.sectionHeadingIcon} />
        <FormattedMessage id="ListingPage.features.event" />
      </div>
      <div className={classNames(css.sectionHeadingFeature, (categories.indexOf("share") > -1 ? "" : css.faded))}>
        <img src={Shared} alt='' className={css.sectionHeadingIcon} />
        <FormattedMessage id="ListingPage.features.share" />
      </div>
      <div className={classNames(css.sectionHeadingFeature, (categories.indexOf("unique") > -1 ? "" : css.faded))}>
        <img src={Unique} alt='' className={css.sectionHeadingIcon} />
        <FormattedMessage id="ListingPage.features.unique" />
      </div>
    </div>
  );
};

export default SectionHeadingFeatures;
