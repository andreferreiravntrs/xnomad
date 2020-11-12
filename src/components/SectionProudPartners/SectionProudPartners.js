import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import css from './SectionProudPartners.css';

import logo1 from './images/antler-logo.svg';
import logo2 from './images/sting-logo.svg';
import logo3 from './images/almi_invest-logo.svg';
import logo4 from './images/vinnova-logo.svg';
import logo5 from './images/slash_ten-logo.svg';


const SectionProudPartners = ({ className }) => {
  return (
    <section className={css.root}>
      <div className={classNames(css.container, className)}>
        <div className={css.row}>
          <div className={css.label}>
            <FormattedMessage id="SectionProudPartners.title" />:
          </div>
          <img className={css.partnerLogo} src={logo1} alt="Antler" />
          <img className={css.partnerLogo} src={logo2} alt="Sting" />
          <img className={css.partnerLogo} src={logo3} alt="Almi Invest" />
          <img className={css.partnerLogo} src={logo4} alt="Vinnova" />
          <img className={css.partnerLogo} src={logo5} alt="Slash.ten" />
        </div>
      </div>
    </section>
  );
}

SectionProudPartners.defaultProps = {
  className: null,
};

SectionProudPartners.propTypes = {
  className: string
};

export default SectionProudPartners;
