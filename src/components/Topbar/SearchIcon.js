import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Topbar.css';

const SearchIcon = props => {
  const { className, rootClassName } = props;
  const classes = classNames(rootClassName || css.rootSearchIcon, className);

  return (
    // <svg
    //   className={classes}
    //   width="18"
    //   height="18"
    //   viewBox="0 0 18 18"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <g
    //     transform="matrix(-1 0 0 1 17 1)"
    //     strokeWidth="2"
    //     fill="none"
    //     fillRule="evenodd"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   >
    //     <path d="M11.733 11.733l3.727 3.727" />
    //     <circle cx="6.4" cy="6.4" r="6.4" />
    //   </g>
    // </svg>
    <svg className={classes} version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="45px" height="50px" viewBox="0 0 652.000000 652.000000"
      preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,652.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
      <path d="M2491 5649 c-115 -12 -292 -53 -415 -96 -827 -286 -1354 -1111 -1266
      -1984 91 -894 805 -1608 1699 -1699 486 -49 995 99 1363 397 43 35 82 63 86
      63 4 0 393 -386 864 -857 l858 -858 82 83 83 82 -858 858 c-471 471 -857 860
      -857 864 0 4 28 43 63 86 211 261 350 600 392 952 19 158 19 282 0 440 -123
      1039 -1050 1778 -2094 1669z m384 -239 c643 -74 1181 -500 1390 -1100 276
      -795 -75 -1658 -828 -2037 -398 -199 -880 -226 -1307 -71 -457 165 -835 548
      -993 1003 -214 618 -66 1267 392 1726 285 284 603 433 1026 483 67 7 235 5
      320 -4z"/>
      </g>
    </svg>
  );
};

const { string } = PropTypes;

SearchIcon.defaultProps = {
  className: null,
  rootClassName: null,
};

SearchIcon.propTypes = {
  className: string,
  rootClassName: string,
};

export default SearchIcon;
