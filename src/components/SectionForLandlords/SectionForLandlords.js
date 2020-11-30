import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import css from './SectionForLandlords.css';

import Icon1 from './images/icon-1.svg';
import Icon2 from './images/icon-2.svg';
import Icon3 from './images/icon-3.svg';
import Icon4 from './images/icon-4.svg';
import Icon5 from './images/icon-5.svg';

const SectionForLandlords = ({ className }) => {
  return (
    <section className={css.root}>
      <div className={classNames(css.container, className)}>
        <div className={css.row}>
          <h4 className={css.h4}>
            <FormattedMessage id="SectionForLandlords.title" />
          </h4>
        </div>
        <div className={classNames(css.row, css.list)}>
          <div className={css.listItem}>
            <img className={css.listItemImage} src={Icon1} alt="" />
            <div className={css.textWrapper}>
              <h6 className={css.listItemTitle}><FormattedMessage id="SectionForLandlords.step1Title" /></h6>
              <div className={css.listItemDescription}>
                <FormattedMessage id="SectionForLandlords.step1Description" />
              </div>
            </div>
          </div>
          <div className={css.listItem}>
            <img className={css.listItemImage} src={Icon2} alt="" />
            <div className={css.textWrapper}>
              <h6 className={css.listItemTitle}><FormattedMessage id="SectionForLandlords.step2Title" /></h6>
              <div className={css.listItemDescription}>
                <FormattedMessage id="SectionForLandlords.step2Description" />
              </div>
            </div>
          </div>
          <div className={css.listItem}>
            <img className={css.listItemImage} src={Icon3} alt="" />
            <div className={css.textWrapper}>
              <h6 className={css.listItemTitle}><FormattedMessage id="SectionForLandlords.step3Title" /></h6>
              <div className={css.listItemDescription}>
                <FormattedMessage id="SectionForLandlords.step3Description" />
              </div>
            </div>
          </div>
          <div className={css.listItem}>
            <img className={css.listItemImage} src={Icon4} alt="" />
            <div className={css.textWrapper}>
              <h6 className={css.listItemTitle}><FormattedMessage id="SectionForLandlords.step4Title" /></h6>
              <div className={css.listItemDescription}>
                <FormattedMessage id="SectionForLandlords.step4Description" />
              </div>
            </div>
          </div>
          <div className={css.listItem}>
            <img className={css.listItemImage} src={Icon5} alt="" />
            <div className={css.textWrapper}>
              <h6 className={css.listItemTitle}><FormattedMessage id="SectionForLandlords.step5Title" /></h6>
              <div className={css.listItemDescription}>
                <FormattedMessage id="SectionForLandlords.step5Description" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const { string } = PropTypes;

SectionForLandlords.defaultProps = { className: null };

SectionForLandlords.propTypes = {
  className: string,
};

export default SectionForLandlords;
