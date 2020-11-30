import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import css from './SectionPartnersQuote.css';

import trusted1 from './images/trusted-1.svg';
import trusted2 from './images/trusted-2.svg';
import trusted3 from './images/trusted-3.svg';
import trusted4 from './images/trusted-4.svg';
import trusted5 from './images/trusted-5.svg';

const SectionPartnersQuote = ({ className }) => {
  return (
    <section className={css.root}>
      <div className={classNames(css.container, className)}>
        <div className={css.row}>
          <div className={css.quote}><FormattedMessage id="SectionPartnersQuote.quote" /></div>
        </div>
        <div className={css.row}>
          <div className={css.label}>
            <FormattedMessage id="SectionPartnersQuote.title" />:
          </div>
          <img className={css.partnerLogo} src={trusted4} alt="" />
          <img className={css.partnerLogo} src={trusted3} alt="" />

          <img className={css.partnerLogo} src={trusted2} alt="" />
          <img className={css.partnerLogo} src={trusted1} alt="" />
          <img className={css.partnerLogo} src={trusted5} alt="" />
        </div>
      </div>
    </section>
  );
}

SectionPartnersQuote.defaultProps = {
  className: null,
};

SectionPartnersQuote.propTypes = {
  className: string
};

export default SectionPartnersQuote;
