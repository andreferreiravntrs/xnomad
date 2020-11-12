import React, { Component } from 'react';
import { string, bool, arrayOf, object } from 'prop-types';
import { compose } from 'redux';
import { Form as FinalForm } from 'react-final-form';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import classNames from 'classnames';
import moment from 'moment';
import { required, bookingDatesRequired, composeValidators } from '../../util/validators';
import { START_DATE, END_DATE } from '../../util/dates';
import { propTypes } from '../../util/types';
import { formatMoney } from '../../util/currency';
import config from '../../config';
import { Form, PrimaryButton, FieldDateRangeInput } from '../../components';
import EstimatedBreakdownMaybe from './EstimatedBreakdownMaybe';

import css from './BookingDatesForm.css';

export class BookingDatesFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { focusedInput: null };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.onFocusedInputChange = this.onFocusedInputChange.bind(this);
  }

  // Function that can be passed to nested components
  // so that they can notify this component when the
  // focused input changes.
  onFocusedInputChange(focusedInput) {
    this.setState({ focusedInput });
  }

  // In case start or end date for the booking is missing
  // focus on that input, otherwise continue with the
  // default handleSubmit function.
  handleFormSubmit(e) {
    const { startDate, endDate } = e.bookingDates || {};
    if (!startDate) {
      e.preventDefault();
      this.setState({ focusedInput: START_DATE });
    } else if (!endDate) {
      e.preventDefault();
      this.setState({ focusedInput: END_DATE });
    } else {
      this.props.onSubmit(e);
    }
  }


  priceData = (price, intl) => {
    if (price && price.currency === config.currency) {
      const formattedPrice = formatMoney(intl, price);
      return { formattedPrice, priceTitle: formattedPrice };
    } else if (price) {
      return {
        formattedPrice: `(${price.currency})`,
        priceTitle: `Unsupported currency (${price.currency})`,
      };
    }
    return {};
  };

  render() {
    const { rootClassName, className, price: unitPrice, dynamicPricing, ...rest } = this.props;
    const classes = classNames(rootClassName || css.root, className);
    if (!unitPrice) {
      return (
        <div className={classes}>
          <p className={css.error}>
            <FormattedMessage id="BookingDatesForm.listingPriceMissing" />
          </p>
        </div>
      );
    }
    if (unitPrice.currency !== config.currency) {
      return (
        <div className={classes}>
          <p className={css.error}>
            <FormattedMessage id="BookingDatesForm.listingCurrencyInvalid" />
          </p>
        </div>
      );
    }

    return (
      <FinalForm
        {...rest}
        unitPrice={unitPrice}
        onSubmit={this.handleFormSubmit}
        render={fieldRenderProps => {
          const {
            endDatePlaceholder,
            startDatePlaceholder,
            form,
            handleSubmit,
            intl,
            // isOwnListing,
            submitButtonWrapperClassName,
            unitPrice,
            unitType,
            values,
            timeSlots,
            fetchTimeSlotsError,
            minDays,
          } = fieldRenderProps;
          const { startDate, endDate } = values && values.bookingDates ? values.bookingDates : {};

          const requiredMessage = intl.formatMessage({ id: 'BookingDatesForm.requiredDate' });
          const startDateErrorMessage = intl.formatMessage({
            id: 'FieldDateRangeInput.invalidStartDate',
          });
          const endDateErrorMessage = intl.formatMessage({
            id: 'FieldDateRangeInput.invalidEndDate',
          });
          const timeSlotsError = fetchTimeSlotsError ? (
            <p className={css.timeSlotsError}>
              <FormattedMessage id="BookingDatesForm.timeSlotsError" />
            </p>
          ) : null;

          // This is the place to collect breakdown estimation data. See the
          // EstimatedBreakdownMaybe component to change the calculations
          // for customized payment processes.
          const bookingData =
            startDate && endDate
              ? {
                unitType,
                unitPrice,
                dynamicPricing,
                startDate,
                endDate,

                // NOTE: If unitType is `line-item/units`, a new picker
                // for the quantity should be added to the form.
                quantity: 1,
              }
              : null;
          const bookingInfo = bookingData ? (
            <div className={css.priceBreakdownContainer}>
              <h3 className={css.priceBreakdownTitle}>
                <FormattedMessage id="BookingDatesForm.priceBreakdownTitle" />
              </h3>
              <EstimatedBreakdownMaybe bookingData={bookingData} />
            </div>
          ) : null;

          let pricingInfo = null;
          if (dynamicPricing) {
            const { formattedPrice: formattedPriceLess7Days } = this.priceData(dynamicPricing.priceLess7Days, intl);
            const { formattedPrice: formattedpriceMore7Days } = this.priceData(dynamicPricing.priceMore7Days, intl);
            const { formattedPrice: formattedpriceMore30Days } = this.priceData(dynamicPricing.priceMore30Days, intl);

            pricingInfo = (
              <div className={css.priceBreakdownContainer}>
                <h3 className={css.priceBreakdownTitle}>
                  <FormattedMessage id="BookingDatesForm.pricing" />
                </h3>
                <ul className={css.pricingList}>
                  <li key={"DailyPrice"} className={css.pricingListItem}>
                    <label>{intl.formatMessage({ id: "BookingDatesForm.pricePerDay" })}</label><span>{formattedPriceLess7Days} {dynamicPricing.priceLess7Days.currency}</span>
                  </li>
                  <li key={"WeeklyPrice"} className={css.pricingListItem}>
                    <label>{intl.formatMessage({ id: "BookingDatesForm.pricePerWeek" })}</label><span>{formattedpriceMore7Days} {dynamicPricing.priceLess7Days.currency}</span>
                  </li>
                  <li key={"MonthlyPrice"} className={css.pricingListItem}>
                    <label>{intl.formatMessage({ id: "BookingDatesForm.pricePerMonth" })}</label><span>{formattedpriceMore30Days} {dynamicPricing.priceLess7Days.currency}</span>
                  </li>
                </ul>
              </div>
            );
          }

          const dateFormatOptions = {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
          };

          const now = moment();
          const today = now.startOf('day').toDate();
          const tomorrow = now
            .startOf('day')
            .add(1, 'days')
            .toDate();
          const startDatePlaceholderText =
            startDatePlaceholder || intl.formatDate(today, dateFormatOptions);
          const endDatePlaceholderText =
            endDatePlaceholder || intl.formatDate(tomorrow, dateFormatOptions);
          const submitButtonClasses = classNames(
            submitButtonWrapperClassName || css.submitButtonWrapper
          );

          return (
            <Form onSubmit={handleSubmit} className={classes}>
              {timeSlotsError}
              <FieldDateRangeInput
                className={css.bookingDates}
                name="bookingDates"
                unitType={unitType}
                startDateId={`${form}.bookingStartDate`}
                startDatePlaceholderText={startDatePlaceholderText}
                endDateId={`${form}.bookingEndDate`}
                endDatePlaceholderText={endDatePlaceholderText}
                focusedInput={this.state.focusedInput}
                onFocusedInputChange={this.onFocusedInputChange}
                format={null}
                timeSlots={timeSlots}
                useMobileMargins
                minDays={minDays}
                intl={intl}
                validate={composeValidators(
                  required(requiredMessage),
                  bookingDatesRequired(startDateErrorMessage, endDateErrorMessage)
                )}
              />
              {minDays ?
                <div className={css.smallPrint}>
                  <FormattedMessage
                    id="BookingPanel.minDays"
                    values={{ numDays: minDays }}
                  />
                </div> : <div className={css.smallPrint}></div>
              }
              {pricingInfo}
              {bookingInfo}
              <div className={submitButtonClasses}>
                <PrimaryButton type="submit" className={css.submitButton}>
                  <FormattedMessage id="BookingDatesForm.requestToBook" />
                </PrimaryButton>
              </div>
            </Form>
          );
        }}
      />
    );
  }
}

BookingDatesFormComponent.defaultProps = {
  rootClassName: null,
  className: null,
  submitButtonWrapperClassName: null,
  price: null,
  dynamicPricing: null,
  isOwnListing: false,
  startDatePlaceholder: null,
  endDatePlaceholder: null,
  timeSlots: null,
};

BookingDatesFormComponent.propTypes = {
  rootClassName: string,
  className: string,
  submitButtonWrapperClassName: string,

  unitType: propTypes.bookingUnitType.isRequired,
  price: propTypes.money,
  dynamicPricing: object,
  isOwnListing: bool,
  timeSlots: arrayOf(propTypes.timeSlot),

  // from injectIntl
  intl: intlShape.isRequired,

  // for tests
  startDatePlaceholder: string,
  endDatePlaceholder: string,
};

const BookingDatesForm = compose(injectIntl)(BookingDatesFormComponent);
BookingDatesForm.displayName = 'BookingDatesForm';

export default BookingDatesForm;
