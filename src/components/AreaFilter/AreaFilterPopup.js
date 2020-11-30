import React, { Component } from 'react';
import { arrayOf, func, node, number, shape, string } from 'prop-types';
import classNames from 'classnames';
import { injectIntl, intlShape } from '../../util/reactIntl';
import { propTypes } from '../../util/types';
import config from '../../config';

import { AreaFilterForm } from '../../forms';
import css from './AreaFilterPopup.css';

const KEY_CODE_ESCAPE = 27;
const RADIX = 10;

const getAreaQueryParamName = queryParamNames => {
  return Array.isArray(queryParamNames)
    ? queryParamNames[0]
    : typeof queryParamNames === 'string'
      ? queryParamNames
      : 'area';
};

// Parse value, which should look like "0,1000"
const parse = areaRange => {
  const [minArea, maxArea] = !!areaRange
    ? areaRange.split(',').map(v => Number.parseInt(v, RADIX))
    : [];
  // Note: we compare to null, because 0 as minArea is falsy in comparisons.
  return !!areaRange && minArea != null && maxArea != null ? { minArea, maxArea } : null;
};

// Format value, which should look like { minArea, maxArea }
const format = (range, queryParamName) => {
  const { minArea, maxArea } = range || {};
  // Note: we compare to null, because 0 as minArea is falsy in comparisons.
  const value = minArea != null && maxArea != null ? `${minArea},${maxArea}` : null;
  return { [queryParamName]: value };
};

class AreaFilterPopup extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.filter = null;
    this.filterContent = null;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.positionStyleForContent = this.positionStyleForContent.bind(this);
  }

  handleSubmit(values) {
    const { onSubmit, queryParamNames } = this.props;
    this.setState({ isOpen: false });
    const areaQueryParamName = getAreaQueryParamName(queryParamNames);
    onSubmit(format(values, areaQueryParamName));
  }

  handleClear() {
    const { onSubmit, queryParamNames } = this.props;
    this.setState({ isOpen: false });
    const areaQueryParamName = getAreaQueryParamName(queryParamNames);
    onSubmit(format(null, areaQueryParamName));
  }

  handleCancel() {
    const { onSubmit, initialValues } = this.props;
    this.setState({ isOpen: false });
    onSubmit(initialValues);
  }

  handleBlur(event) {
    // FocusEvent is fired faster than the link elements native click handler
    // gets its own event. Therefore, we need to check the origin of this FocusEvent.
    if (!this.filter.contains(event.relatedTarget)) {
      this.setState({ isOpen: false });
    }
  }

  handleKeyDown(e) {
    // Gather all escape presses to close menu
    if (e.keyCode === KEY_CODE_ESCAPE) {
      this.toggleOpen(false);
    }
  }

  toggleOpen(enforcedState) {
    if (enforcedState) {
      this.setState({ isOpen: enforcedState });
    } else {
      this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }
  }

  positionStyleForContent() {
    if (this.filter && this.filterContent) {
      // Render the filter content to the right from the menu
      // unless there's no space in which case it is rendered
      // to the left
      const distanceToRight = window.innerWidth - this.filter.getBoundingClientRect().right;
      const labelWidth = this.filter.offsetWidth;
      const contentWidth = this.filterContent.offsetWidth;
      const contentWidthBiggerThanLabel = contentWidth - labelWidth;
      const renderToRight = distanceToRight > contentWidthBiggerThanLabel;
      const contentPlacementOffset = this.props.contentPlacementOffset;

      const offset = renderToRight
        ? { left: contentPlacementOffset }
        : { right: contentPlacementOffset };
      // set a min-width if the content is narrower than the label
      const minWidth = contentWidth < labelWidth ? { minWidth: labelWidth } : null;

      return { ...offset, ...minWidth };
    }
    return {};
  }


  render() {
    const {
      rootClassName,
      className,
      id,
      label,
      queryParamNames,
      initialValues,
      min,
      max,
      step,
      intl,
    } = this.props;
    const classes = classNames(rootClassName || css.root, className);

    const areaQueryParam = getAreaQueryParamName(queryParamNames);
    const initialArea =
      initialValues && initialValues[areaQueryParam] ? parse(initialValues[areaQueryParam]) : {};
    const { minArea, maxArea } = initialArea || {};

    const hasValue = value => value != null;
    const hasInitialValues = initialValues && hasValue(minArea) && hasValue(maxArea);

    const currentLabel = hasInitialValues
      ? intl.formatMessage(
        { id: 'AreaFilter.labelSelectedButton' },
        {
          minArea: minArea,
          maxArea: maxArea,
        }
      )
      : label
        ? label
        : intl.formatMessage({ id: 'AreaFilter.label' });

    const labelStyles = hasInitialValues ? css.labelSelected : css.label;
    const contentStyle = this.positionStyleForContent();

    return (
      <div
        className={classes}
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
        ref={node => {
          this.filter = node;
        }}
      >
        <button className={labelStyles} onClick={() => this.toggleOpen()}>
          {currentLabel}
          <svg className={css.arrowIcon} width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7.77174 8.89407C7.8003 8.92737 7.83539 8.95403 7.87468 8.97229C7.91398 8.99056 7.95659 9 7.99969 9C8.0428 9 8.08541 8.99056 8.12471 8.97229C8.164 8.95403 8.19909 8.92737 8.22765 8.89407L15 1" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <AreaFilterForm
          id={id}
          initialValues={hasInitialValues ? initialArea : { minArea: min, maxArea: max }}
          onClear={this.handleClear}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
          intl={intl}
          contentRef={node => {
            this.filterContent = node;
          }}
          style={contentStyle}
          min={min}
          max={max}
          step={step}
          showAsPopup
          isOpen={this.state.isOpen}
        />
      </div>
    );
  }
}

AreaFilterPopup.defaultProps = {
  rootClassName: null,
  className: null,
  initialValues: null,
  contentPlacementOffset: 0,
  liveEdit: false,
  step: number,
};

AreaFilterPopup.propTypes = {
  rootClassName: string,
  className: string,
  id: string.isRequired,
  label: node,
  queryParamNames: arrayOf(string).isRequired,
  onSubmit: func.isRequired,
  initialValues: shape({
    area: string,
  }),
  contentPlacementOffset: number,
  min: number.isRequired,
  max: number.isRequired,
  step: number,

  // form injectIntl
  intl: intlShape.isRequired,
};

export default injectIntl(AreaFilterPopup);
