import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Topbar.css';

const MenuIcon = props => {
  const { className, rootClassName } = props;
  const classes = classNames(rootClassName || css.rootMenuIcon, className);

  return (
    <svg className={classes} width="45px" height="50" version="1.0" xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 592.000000 592.000000"
   preserveAspectRatio="xMidYMid meet">
  <g transform="translate(0.000000,592.000000) scale(0.100000,-0.100000)"
  fill="#000000" stroke="none">
  <path d="M343 5082 l-123 -3 0 -119 c0 -66 3 -120 8 -120 9 -1 5363 -1 5425 0
  l47 0 0 120 0 120 -37 0 c-371 2 -5233 4 -5320 2z"/>
  <path d="M243 3062 c-22 -3 -23 -7 -23 -123 l0 -119 2740 0 2740 0 0 120 0
  120 -237 1 c-131 1 -242 0 -248 -1 -5 -1 -57 -1 -115 0 -58 1 -112 2 -120 2
  -8 -1 -170 -1 -360 0 -190 0 -352 0 -360 -1 -8 0 -62 0 -120 0 -58 1 -112 1
  -120 1 -8 -1 -170 -1 -360 0 -190 0 -352 0 -360 -1 -8 0 -62 0 -120 0 -58 1
  -111 1 -117 0 -7 -1 -19 -1 -25 -2 -7 -1 -132 -1 -278 -1 -146 1 -272 1 -280
  0 -8 0 -64 0 -125 1 -60 0 -117 0 -125 0 -8 0 -96 0 -195 0 -99 0 -187 0 -195
  0 -8 -1 -64 -1 -125 0 -60 0 -117 0 -125 0 -8 0 -96 0 -195 0 -99 0 -187 0
  -195 0 -8 -1 -64 -1 -125 0 -60 0 -117 0 -125 0 -8 0 -96 0 -195 0 -99 0 -187
  0 -195 0 -8 -1 -66 0 -128 1 -62 1 -116 0 -119 -3 -3 -3 -15 -2 -27 2 -11 4
  -31 5 -43 3z"/>
  <path d="M248 1042 l-28 -3 0 -119 c0 -106 2 -119 18 -119 15 0 78 -1 127 -1
  8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25
  0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0
  35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52
  0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0
  60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60
  0 8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0
  25 0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8
  0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0
  52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0 35
  0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52 0
  60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60
  0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0
  8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25
  0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0
  35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52 0 60 0 8 0 35 0 60 0 25 0 52
  0 60 0 8 0 35 0 60 0 25 0 51 0 58 1 6 0 36 -1 65 -3 28 -2 52 0 52 4 0 4 6 5
  14 2 21 -8 106 -10 106 -2 0 4 6 5 14 2 21 -8 106 -10 106 -2 0 4 12 3 28 -1
  15 -4 39 -4 55 0 15 4 27 4 27 1 0 -4 16 -7 35 -7 l35 0 0 123 0 122 -27 1
  c-16 1 -32 1 -36 0 -4 -1 -18 -1 -30 -1 -66 -1 -204 -1 -217 -1 -8 1 -51 1
  -95 0 -44 0 -89 0 -100 0 -11 0 -65 0 -120 0 -55 0 -117 1 -137 1 -49 0 -125
  0 -140 0 -7 -1 -42 -1 -78 -1 -85 1 -90 1 -190 0 -47 0 -92 0 -100 0 -8 1 -51
  1 -95 0 -44 0 -89 0 -100 0 -11 0 -65 0 -120 0 -55 0 -117 1 -137 1 -49 0
  -125 0 -140 0 -7 -1 -42 -1 -78 -1 -85 1 -90 1 -190 0 -47 0 -92 0 -100 0 -8
  1 -51 1 -95 0 -44 0 -89 0 -100 0 -11 0 -65 0 -120 0 -55 0 -117 1 -137 1 -49
  0 -125 0 -140 0 -7 -1 -42 -1 -78 -1 -85 1 -90 1 -190 0 -47 0 -92 0 -100 0
  -8 1 -51 1 -95 0 -44 0 -89 0 -100 0 -11 0 -65 0 -120 0 -55 0 -117 1 -137 1
  -49 0 -125 0 -140 0 -7 -1 -42 -1 -78 -1 -85 1 -90 1 -190 0 -47 0 -92 0 -100
  0 -8 1 -51 1 -95 0 -44 0 -89 0 -100 0 -11 0 -65 0 -120 0 -55 0 -117 1 -137
  1 -49 0 -125 0 -140 0 -7 -1 -42 -1 -78 -1 -85 1 -90 1 -190 0 -47 0 -92 0
  -100 0 -12 1 -112 0 -190 0 -8 0 -40 1 -70 3 -30 2 -67 2 -82 0z"/>
  </g>
  </svg>
  );
  
};

const { string } = PropTypes;

MenuIcon.defaultProps = {
  className: null,
  rootClassName: null,
};

MenuIcon.propTypes = {
  className: string,
  rootClassName: string,
};

export default MenuIcon;
