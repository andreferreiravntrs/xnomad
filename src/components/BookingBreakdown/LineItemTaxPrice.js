import React from 'react';
import { bool } from 'prop-types';
import { FormattedMessage, intlShape } from 'react-intl';
// import { formatMoney } from '../../util/currency';
import { txIsCanceled, txIsDelivered, txIsDeclined } from '../../util/transaction';
import { propTypes } from '../../util/types';

import css from './BookingBreakdown.css';

const LineItemUnitPrice = props => {
  //   const { transaction, isProvider, intl } = props;
  const { transaction, isProvider } = props;
  let providerTotalMessageId = 'BookingBreakdown.providerTotalDefault';
  if (txIsDelivered(transaction)) {
    providerTotalMessageId = 'BookingBreakdown.providerTotalDelivered';
  } else if (txIsDeclined(transaction)) {
    providerTotalMessageId = 'BookingBreakdown.providerTotalDeclined';
  } else if (txIsCanceled(transaction)) {
    providerTotalMessageId = 'BookingBreakdown.providerTotalCanceled';
  }

  const taxLabel = isProvider ? (
    <FormattedMessage id={providerTotalMessageId} />
  ) : (
      <FormattedMessage id="BookingBreakdown.tax" />
    );

  const taxPrice = isProvider
    ? transaction.attributes.payoutTotal
    : transaction.attributes.payinTotal;

  const ntaxPrice = ((taxPrice.amount * 0.2) / 100);
  // const formattedTotalPrice = formatMoney(intl, taxPrice);

  return (
    <div className={css.lineItem}>
      <label className={css.itemLabel}>{taxLabel}</label>
      <span className={css.itemValue}>{ntaxPrice}</span>
    </div>
  );
};

LineItemUnitPrice.propTypes = {
  transaction: propTypes.transaction.isRequired,
  isProvider: bool.isRequired,
  intl: intlShape.isRequired,
};

export default LineItemUnitPrice;
