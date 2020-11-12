import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import css from './SectionPartners.css';

import voiLogo from './images/voi-logo.svg';
import bergamotteLogo from './images/bergamotte-logo.svg';
import dagmarLogo from './images/dagmar-logo.svg';
import sniphLogo from './images/sniph-logo.svg';
import stutterheimLogo from './images/stutterheim-logo.svg';
import vanmoofLogo from './images/vanmoof-logo.svg';


const SectionPartners = ({ className }) => {
  return (
    <section className={css.root}>
      <div className={classNames(css.container, className)}>
        <div className={css.row}>
          <div className={css.label}>
            <FormattedMessage id="SectionPartners.title" />:
          </div>
          <img className={css.partnerLogo} src={voiLogo} alt="Voi" />
          <img className={css.partnerLogo} src={bergamotteLogo} alt="Bergamotte" />
          <img className={css.partnerLogo} src={vanmoofLogo} alt="Vanmoof" />
          <img className={css.partnerLogo} src={dagmarLogo} alt="Dagmar" />
          <img className={css.partnerLogo} src={sniphLogo} alt="Sniph" />
          <img className={css.partnerLogo} src={stutterheimLogo} alt="Stutterheim" />
        </div>
      </div>
    </section>
  );
}

SectionPartners.defaultProps = {
  className: null,
};

SectionPartners.propTypes = {
  className: string
};

export default SectionPartners;
