import React from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import nomadData from './auxSvg/nomadData.svg';
import nomadDesign from './auxSvg/nomadDesign.svg';
import nomadMarketing from './auxSvg/nomadMarketing.svg';
import nomadStaff from './auxSvg/nomadStaff.svg';
import nomadFitting from './auxSvg/nomadFitting.svg';
import restaurant from './svg/restaurant.svg';

import css from './SectionAuxMaybe.css';

const SectionAuxMaybe = props => {
  const { className, rootClassName} = props;
  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <h2 className={css.title}>
        <FormattedMessage id="ListingPage.auxTitle" />
      </h2>
      <div className={css.subTitle}>
          <FormattedMessage id="ListingPage.auxSubTitle" />
      </div>
      <br/>
      <div className={css.sectionHeadingFeatures}>
      <div className={css.sectionHeadingFeature}>
        <img src={nomadDesign} alt='' className={css.sectionHeadingIcon} />
        Design
      </div>
      <div className={css.sectionHeadingFeature}>
        <img src={nomadFitting} alt='' className={css.sectionHeadingIcon} />
        Fitting & fixtures
      </div>
      <div className={css.sectionHeadingFeature}>
        <img src={nomadStaff} alt='' className={css.sectionHeadingIcon} />
        Staff
      </div>
      <div className={css.sectionHeadingFeature}>
        <img src={nomadData} alt='' className={css.sectionHeadingIcon} />
        Instore Data
      </div>
      <div className={css.sectionHeadingFeature}>
        <img src={restaurant} alt='' className={css.sectionHeadingIcon} />
        Catering
      </div>
      <div className={css.sectionHeadingFeature}>
        <img src={nomadMarketing} alt='' className={css.sectionHeadingIcon} />
        Marketing
      </div>
    </div>
    </div>
  );
};

// SectionAuxMaybe.defaultProps = { className: null, rootClassName: null };

// SectionAuxMaybe.propTypes = {
//   className: string,
//   rootClassName: string,
//   publicData: shape({
//     rules: string,
//   }),
// };

export default SectionAuxMaybe;
