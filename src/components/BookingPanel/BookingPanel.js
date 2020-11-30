import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { intlShape, injectIntl, FormattedMessage } from '../../util/reactIntl';
import { arrayOf, array, bool, func, node, oneOfType, shape, string } from 'prop-types';
import classNames from 'classnames';
import omit from 'lodash/omit';
import { propTypes, LISTING_STATE_CLOSED, LINE_ITEM_NIGHT, LINE_ITEM_DAY } from '../../util/types';
import { formatMoney } from '../../util/currency';
import { parse, stringify } from '../../util/urlHelpers';
import config from '../../config';
import { ModalInMobile, Button } from '../../components';
import { BookingDatesForm } from '../../forms';
import { types as sdkTypes } from '../../util/sdkLoader';

import css from './BookingPanel.css';

// This defines when ModalInMobile shows content as Modal
const MODAL_BREAKPOINT = 1023;
const { Money } = sdkTypes;

const priceData = (price, intl) => {
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

const openBookModal = (isOwnListing, isClosed, history, location) => {
  if (isOwnListing || isClosed) {
    window.scrollTo(0, 0);
  } else {
    const { pathname, search, state } = location;
    const searchString = `?${stringify({ ...parse(search), book: true })}`;
    history.push(`${pathname}${searchString}`, state);
  }
};

const closeBookModal = (history, location) => {
  const { pathname, search, state } = location;
  const searchParams = omit(parse(search), 'book');
  const searchString = `?${stringify(searchParams)}`;
  history.push(`${pathname}${searchString}`, state);
};

const BookingPanel = props => {
  const {
    rootClassName,
    className,
    titleClassName,
    listing,
    isOwnListing,
    unitType,
    onSubmit,
    title,
    subTitle,
    authorDisplayName,
    onManageDisableScrolling,
    timeSlots,
    fetchTimeSlotsError,
    history,
    location,
    intl,
    onFetchTransactionLineItems,
    lineItems,
    fetchLineItemsInProgress,
    fetchLineItemsError,
    onContactUser
  } = props;

  const buildDynamicPricing = (price, dynamicPricing) => {
    return { priceLess7Days: new Money(dynamicPricing.priceLess7Days, price.currency), priceMore30Days: new Money(dynamicPricing.priceMore30Days, price.currency), priceMore7Days: new Money(dynamicPricing.priceMore7Days, price.currency) }
  }

  const user = listing.author;
  const price = listing.attributes.price;
  const dynamicPricing = listing.attributes && listing.attributes.publicData && listing.attributes.publicData.dynamicPricing ? buildDynamicPricing(price, listing.attributes.publicData.dynamicPricing) : buildDynamicPricing(price, { priceLess7Days: price.amount, priceMore30Days: price.amount, priceMore7Days: price.amount });
  const hasListingState = !!listing.attributes.state;
  const isClosed = hasListingState && listing.attributes.state === LISTING_STATE_CLOSED;
  const showBookingDatesForm = hasListingState && !isClosed;
  const showClosedListingHelpText = listing.id && isClosed;
  const { formattedPrice, priceTitle } = priceData(price, intl);
  const isBook = !!parse(location.search).book;

  const subTitleText = !!subTitle
    ? subTitle
    : showClosedListingHelpText
      ? intl.formatMessage({ id: 'BookingPanel.subTitleClosedListing' })
      : null;

  const minDays = listing.attributes.publicData &&
    listing.attributes.publicData.minDays &&
    parseInt(listing.attributes.publicData.minDays, 10) > 1 ?
    parseInt(listing.attributes.publicData.minDays, 10) : null;

  const isNightly = unitType === LINE_ITEM_NIGHT;
  const isDaily = unitType === LINE_ITEM_DAY;

  const unitTranslationKey = isNightly
    ? 'BookingPanel.perNight'
    : isDaily
    ? 'BookingPanel.perDay'
    : 'BookingPanel.perUnit';

  const classes = classNames(rootClassName || css.root, className);
  const titleClasses = classNames(titleClassName || css.bookingTitle);

  const handleContactUserClick = () => {
    onContactUser(user);
  };
  return (
    <div className={classes}>
      <div className={css.bookinPanelWrapper}>
        <ModalInMobile
          containerClassName={css.modalContainer}
          id="BookingDatesFormInModal"
          isModalOpenOnMobile={isBook}
          onClose={() => closeBookModal(history, location)}
          showAsModalMaxWidth={MODAL_BREAKPOINT}
          onManageDisableScrolling={onManageDisableScrolling}
        >
          <div className={css.modalHeading}>
          </div>

          <div className={css.bookingHeading}>
            <span className={css.fromSpan}><FormattedMessage id={'BookingPanel.from'} /></span> <span title={priceTitle}>{formattedPrice}</span> <FormattedMessage
              id={unitTranslationKey}
              values={{ currency: price.currency }}
            />
          </div>
          {subTitleText ? <div className={css.bookingHelp}>{subTitleText}</div> : null}

          {showBookingDatesForm ? (
            <> 
              <BookingDatesForm
                className={css.bookingForm}
                formId="BookingPanel"
                submitButtonWrapperClassName={css.bookingDatesSubmitButtonWrapper}
                startDatePlaceholder={intl.formatMessage({ id: 'BookingPanel.popInDate' })}
                endDatePlaceholder={intl.formatMessage({ id: 'BookingPanel.popOutDate' })}
                unitType={unitType}
                onSubmit={onSubmit}
                price={price}
                listingId={listing.id}
                dynamicPricing={dynamicPricing}
                isOwnListing={isOwnListing}
                timeSlots={timeSlots}
                fetchTimeSlotsError={fetchTimeSlotsError}
                onFetchTransactionLineItems={onFetchTransactionLineItems}
                lineItems={lineItems}
                fetchLineItemsInProgress={fetchLineItemsInProgress}
                fetchLineItemsError={fetchLineItemsError}
                minDays={minDays}
              />
              <Button rootClassName={css.contactButtonDesktop} onClick={handleContactUserClick}>
                <FormattedMessage id="BookingPanel.ctaContactButton" />
              </Button>
              <p className={css.bottomSmallPrint}>
                <FormattedMessage
                  id={
                    isOwnListing
                      ? 'BookingDatesForm.ownListing'
                      : 'BookingDatesForm.youWontBeChargedInfo'
                  }
                />
              </p>
            </>
          ) : null}
        </ModalInMobile>
        <div className={css.openBookingForm}>
          <div className={css.priceContainer}>
            <div className={css.priceValue} title={priceTitle}>
              {formattedPrice}
              <br />
              <FormattedMessage
                id={unitTranslationKey}
                values={{ currency: price.currency }}
              />
            </div>
          </div>

          {showBookingDatesForm ? (
            <Button
              rootClassName={css.bookButton}
              onClick={() => openBookModal(isOwnListing, isClosed, history, location)}
            >
              <FormattedMessage id="BookingPanel.ctaButtonMessage" />
            </Button>
          ) : (
              <div className={css.closedListingButton}>
                <FormattedMessage id="BookingPanel.closedListingButtonText" />
              </div>
            )}
        </div>
      </div>
    
      <Button rootClassName={css.contactButtonMobile} onClick={handleContactUserClick}>
        <FormattedMessage id="BookingPanel.ctaContactButton" />
      </Button>
    </div>
  );
};

BookingPanel.defaultProps = {
  rootClassName: null,
  className: null,
  titleClassName: null,
  isOwnListing: false,
  subTitle: null,
  unitType: config.bookingUnitType,
  timeSlots: null,
  fetchTimeSlotsError: null,
  lineItems: null,
  fetchLineItemsError: null,
};

BookingPanel.propTypes = {
  rootClassName: string,
  className: string,
  titleClassName: string,
  listing: oneOfType([propTypes.listing, propTypes.ownListing]),
  isOwnListing: bool,
  unitType: propTypes.bookingUnitType,
  onSubmit: func.isRequired,
  title: oneOfType([node, string]),
  subTitle: oneOfType([node, string]),
  authorDisplayName: oneOfType([node, string]),
  onManageDisableScrolling: func.isRequired,
  timeSlots: arrayOf(propTypes.timeSlot),
  fetchTimeSlotsError: propTypes.error,
  onFetchTransactionLineItems: func.isRequired,
  lineItems: array,
  fetchLineItemsInProgress: bool.isRequired,
  fetchLineItemsError: propTypes.error,

  // from withRouter
  history: shape({
    push: func.isRequired,
  }).isRequired,
  location: shape({
    search: string,
  }).isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

export default compose(
  withRouter,
  injectIntl
)(BookingPanel);
