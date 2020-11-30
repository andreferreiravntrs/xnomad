import React from 'react';
import css from './ContactPost.css';
import { FormattedMessage, injectIntl } from '../../util/reactIntl';

const ContactPostComponent = props => {
  const { image, intlMessageId, formId, handleOpenModal, intl } = props;

  const handleClick = () => {
    handleOpenModal(formId);
  }

  return (
    <div className={css.contactPost}>
      <img src={image} alt={intl.formatMessage({ id: intlMessageId + ".title" })} className={css.featuredLocationImage} />
      <div className={css.content}>
        <h6 className={css.title}>
          <FormattedMessage id={intlMessageId + ".title"} />
        </h6>
        <p className={css.subTitle}>
          <FormattedMessage id={intlMessageId + ".subTitle"} />
        </p>
        <button type="button" className={css.downloadBtn} onClick={handleClick}>
          <FormattedMessage id="ContactPost.button" />
        </button>
      </div>
    </div>
  );
}

const ContactPost = injectIntl(ContactPostComponent);

export default ContactPost;
