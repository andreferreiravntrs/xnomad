import React from 'react';
import { getDistrict } from '../../util/xnomad';
import css from './ListingPage.css';

const SectionHeading = props => {
  const { listing, richTitle } = props;

  return (
    <div className={css.sectionHeading}>
      <div className={css.heading}>
        <div>
          <h3 className={css.location}>{getDistrict(listing)}</h3>
          <h1 className={css.title}>{richTitle}</h1>
        </div>
      </div>
    </div>
  );
};
export default SectionHeading;
