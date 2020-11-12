/**
 * MenuLabel is the only always visible part of Menu.
 * Clicking it toggles visibility of MenuContent.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './MenuLabel.css';

import svg from '../../assets/arrow.svg';

class MenuLabel extends Component {
  constructor(props) {
    super(props);

    this.state = { clickedWithMouse: false };
    this.onClick = this.onClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onClick(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.onToggleActive();

    // Don't show focus outline if user just clicked the element with mouse
    // tab + enter creates also a click event, but its location is origin.
    const nativeEvent = e.nativeEvent;
    const isRealClick = !(nativeEvent.clientX === 0 && nativeEvent.clientY === 0);
    if (isRealClick) {
      this.setState({ clickedWithMouse: true });
    }
  }

  onBlur() {
    this.setState(() => {
      return { clickedWithMouse: false };
    });
  }

  render() {
    const { children, className, rootClassName, isOpen, isOpenClassName } = this.props;

    const rootClass = rootClassName || css.root;
    const isOpenClass = isOpenClassName || css.isOpen;
    const classes = classNames(rootClass, className, {
      [css.clickedWithMouse]: this.state.clickedWithMouse,
      [isOpenClass]: isOpen,
    });

    return (
      <button className={classes} onClick={this.onClick} onBlur={this.onBlur}>
        {children}
        <svg className={css.arrowIcon} width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L7.77174 8.89407C7.8003 8.92737 7.83539 8.95403 7.87468 8.97229C7.91398 8.99056 7.95659 9 7.99969 9C8.0428 9 8.08541 8.99056 8.12471 8.97229C8.164 8.95403 8.19909 8.92737 8.22765 8.89407L15 1" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    );
  }
}
/* eslint-enable jsx-a11y/no-static-element-interactions */

MenuLabel.defaultProps = {
  className: null,
  isOpenClassName: null,
  isOpen: false,
  onToggleActive: null,
  rootClassName: '',
};

const { bool, func, node, string } = PropTypes;

MenuLabel.propTypes = {
  children: node.isRequired,
  className: string,
  isOpenClassName: string,
  isOpen: bool,
  onToggleActive: func,
  rootClassName: string,
};

export default MenuLabel;
