import React from 'react';
import { FormattedMessage, intlShape } from 'react-intl';
import { formatMoney } from '../../util/currency';
import { propTypes, LINE_ITEM_PROVIDER_COMMISSION } from '../../util/types';

import css from './BookingBreakdown.css';

const LineItemProviderCommissionRefundMaybe = props => {
  const { transaction, isProvider, intl } = props;

  const refund = transaction.attributes.lineItems.find(
    item => item.code === LINE_ITEM_PROVIDER_COMMISSION && item.reversal
  );

  return isProvider && refund ? (
    <div className={css.lineItem}>
      <label className={css.itemLabel}>
        <FormattedMessage id="BookingBreakdown.refundProviderFee" />
      </label>
      <span className={css.itemValue}>{formatMoney(intl, refund.lineTotal)} {refund.lineTotal.currency}</span>
    </div>
  ) : null;
};

LineItemProviderCommissionRefundMaybe.propTypes = {
  transaction: propTypes.transaction.isRequired,
  intl: intlShape.isRequired,
};

export default LineItemProviderCommissionRefundMaybe;
