/**
 * Provides a date picker for Final Forms (using https://github.com/airbnb/react-dates)
 *
 * NOTE: If you are using this component inside BookingDatesForm,
 * you should convert value.date to start date and end date before submitting it to API
 */

import React, { Component } from 'react';
import { bool, func, object, oneOf, string, arrayOf } from 'prop-types';
import { Field } from 'react-final-form';
import classNames from 'classnames';
import { START_DATE, END_DATE } from '../../util/dates';
import { propTypes } from '../../util/types';
import { ValidationError } from '../../components';
import { intlShape } from 'react-intl';

import DateRangeInput from './DateRangeInput';
import css from './FieldDateRangeInput.css';

const MAX_MOBILE_SCREEN_WIDTH = 768;

class FieldDateRangeInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { focusedInput: null };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // Update focusedInput in case a new value for it is
    // passed in the props. This may occur if the focus
    // is manually set to the date picker.
    if (nextProps.focusedInput && nextProps.focusedInput !== this.props.focusedInput) {
      this.setState({ focusedInput: nextProps.focusedInput });
    }
  }

  handleBlur(focusedInput) {
    this.setState({ focusedInput: null });
    this.props.input.onBlur(focusedInput);
    // Notify the containing component that the focused
    // input has changed.
    if (this.props.onFocusedInputChange) {
      this.props.onFocusedInputChange(null);
    }
  }

  handleFocus(focusedInput) {
    this.setState({ focusedInput });
    this.props.input.onFocus(focusedInput);
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      className,
      rootClassName,
      unitType,
      startDateId,
      startDateLabel,
      endDateId,
      endDateLabel,
      input,
      meta,
      useMobileMargins,
      // Extract focusedInput and onFocusedInputChange so that
      // the same values will not be passed on to subcomponents.
      focusedInput,
      onFocusedInputChange,
      minDays,
      ...rest
    } = this.props;
    /* eslint-disable no-unused-vars */

    if (startDateLabel && !startDateId) {
      throw new Error('startDateId required when a startDateLabel is given');
    }

    if (endDateLabel && !endDateId) {
      throw new Error('endDateId required when a endDateLabel is given');
    }

    const { touched, error } = meta;
    const value = input.value;

    // If startDate is valid label changes color and bottom border changes color too
    const startDateIsValid = value && value.startDate instanceof Date;
    const startDateLabelClasses = classNames(css.startDateLabel, {
      [css.labelSuccess]: false, //startDateIsValid,
    });

    // If endDate is valid label changes color and bottom border changes color too
    const endDateIsValid = value && value.endDate instanceof Date;
    const endDateLabelClasses = classNames(css.endDateLabel, {
      [css.labelSuccess]: false, //endDateIsValid,
    });

    const label =
      startDateLabel && endDateLabel ? (
        <div className={css.labels}>
          <label className={startDateLabelClasses} htmlFor={startDateId}>
            {startDateLabel}
          </label>
          <label className={endDateLabelClasses} htmlFor={endDateId}>
            {endDateLabel}
          </label>
        </div>
      ) : (<div className={css.labels}>
        <label className={startDateLabelClasses} htmlFor={startDateId}>
          {this.props.intl.formatMessage({ id: 'BookingDateRangeFilter.labelPlain' })}
        </label></div>);

    // eslint-disable-next-line no-unused-vars
    const { onBlur, onFocus, ...restOfInput } = input;
    const inputProps = {
      unitType,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      useMobileMargins,
      readOnly: typeof window !== 'undefined' && window.innerWidth < MAX_MOBILE_SCREEN_WIDTH,
      ...restOfInput,
      ...rest,
      focusedInput: this.state.focusedInput,
      startDateId,
      endDateId,
      minDays,
    };
    const classes = classNames(rootClassName || css.fieldRoot, className);
    const errorClasses = classNames({ [css.mobileMargins]: useMobileMargins });

    return (
      <div className={classes}>
        {label}
        <DateRangeInput {...inputProps} />
        <div
          className={classNames(css.inputBorders, {
            [css.mobileMargins]: useMobileMargins && !this.state.focusedInput,
          })}
        >
        </div>
        <ValidationError className={errorClasses} fieldMeta={meta} />
      </div>
    );
  }
}

FieldDateRangeInputComponent.defaultProps = {
  className: null,
  rootClassName: null,
  useMobileMargins: false,
  endDateId: null,
  endDateLabel: null,
  endDatePlaceholderText: null,
  startDateId: null,
  startDateLabel: null,
  startDatePlaceholderText: null,
  focusedInput: null,
  onFocusedInputChange: null,
  timeSlots: null,
};

FieldDateRangeInputComponent.propTypes = {
  className: string,
  rootClassName: string,
  unitType: propTypes.bookingUnitType.isRequired,
  useMobileMargins: bool,
  endDateId: string,
  endDateLabel: string,
  endDatePlaceholderText: string,
  startDateId: string,
  startDateLabel: string,
  startDatePlaceholderText: string,
  timeSlots: arrayOf(propTypes.timeSlot),
  input: object.isRequired,
  meta: object.isRequired,
  focusedInput: oneOf([START_DATE, END_DATE]),
  onFocusedInputChange: func,
  // from injectIntl
  intl: intlShape.isRequired,
};

const FieldDateRangeInput = props => {
  return <Field component={FieldDateRangeInputComponent} {...props} />;
};

export { DateRangeInput };
export default FieldDateRangeInput;
