import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import config from '../../config';
import LogoImage from './LOGO_Name.svg';
import css from './Logo.css';
import nomad_icon from './nomad.svg';
import nomad_mobile_icon from './logo_round.svg';

const Logo = props => {
  const { className, format, ...rest } = props;
  const mobileClasses = classNames(css.logoMobile, className);

  if (format === 'desktop') {
    return <img className={className} src={LogoImage} alt={config.siteTitle} {...rest} />;
  }
  if (format === 'desktop-footer') {
    return <img className={className} src={nomad_icon} alt={config.siteTitle} {...rest} />;
  }

  return <img className={mobileClasses} src={nomad_mobile_icon} alt={config.siteTitle} {...rest} />;
};

const { oneOf, string } = PropTypes;

Logo.defaultProps = {
  className: null,
  format: 'desktop',
};

Logo.propTypes = {
  className: string,
  format: oneOf(['desktop', 'mobile', 'desktop-footer']),
};

export default Logo;
