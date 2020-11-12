import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import {
  NamedLink,
} from '../../components';
import css from './SectionGetInContact.css';

const SectionGetInContact = ({ className }) => {
  return (
    <section className={css.root}>
      <div className={classNames(css.container, className)}>
        <div className={css.row}>
          <div className={classNames(css.col, css.left)}>
            <h3 className={css.h3}><FormattedMessage id="SectionGetInContact.title" /></h3>
            <p className={css.body}><FormattedMessage id="SectionGetInContact.body" /></p>
          </div>
          <div className={classNames(css.col, css.right)}>
            <NamedLink name="AboutPage" to={{ hash: '#contact' }} className={css.callToActionBtn}>
              <FormattedMessage id="SectionGetInContact.contactRetail" />
            </NamedLink>
          </div>
        </div>
      </div>
    </section>
  );
}

SectionGetInContact.defaultProps = {
  className: null,
};

SectionGetInContact.propTypes = {
  className: string
};

export default SectionGetInContact;
