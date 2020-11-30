import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl';
import { Form as FinalForm } from 'react-final-form';
import classNames from 'classnames';
import * as validators from '../../util/validators';
import { Form, PrimaryButton, FieldTextInput } from '../../components';

import css from './SignupForm.css';

const KEY_CODE_ENTER = 13;

const SignupFormComponent = props => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleCheckbox = () => {
    setTermsAccepted(!termsAccepted);
  }

  return (
    <FinalForm
      {...props}
      render={fieldRenderProps => {
        const {
          rootClassName,
          className,
          formId,
          handleSubmit,
          inProgress,
          invalid,
          intl,
          onOpenTermsOfService,
        } = fieldRenderProps;

        // email
        const emailLabel = intl.formatMessage({
          id: 'SignupForm.emailLabel',
        });
        const emailPlaceholder = intl.formatMessage({
          id: 'SignupForm.emailPlaceholder',
        });
        const emailRequiredMessage = intl.formatMessage({
          id: 'SignupForm.emailRequired',
        });
        const emailRequired = validators.required(emailRequiredMessage);
        const emailInvalidMessage = intl.formatMessage({
          id: 'SignupForm.emailInvalid',
        });
        const emailValid = validators.emailFormatValid(emailInvalidMessage);

        // password
        const passwordLabel = intl.formatMessage({
          id: 'SignupForm.passwordLabel',
        });
        const passwordPlaceholder = intl.formatMessage({
          id: 'SignupForm.passwordPlaceholder',
        });
        const passwordRequiredMessage = intl.formatMessage({
          id: 'SignupForm.passwordRequired',
        });
        const passwordMinLengthMessage = intl.formatMessage(
          {
            id: 'SignupForm.passwordTooShort',
          },
          {
            minLength: validators.PASSWORD_MIN_LENGTH,
          }
        );
        const passwordMaxLengthMessage = intl.formatMessage(
          {
            id: 'SignupForm.passwordTooLong',
          },
          {
            maxLength: validators.PASSWORD_MAX_LENGTH,
          }
        );
        const passwordMinLength = validators.minLength(
          passwordMinLengthMessage,
          validators.PASSWORD_MIN_LENGTH
        );
        const passwordMaxLength = validators.maxLength(
          passwordMaxLengthMessage,
          validators.PASSWORD_MAX_LENGTH
        );
        const passwordRequired = validators.requiredStringNoTrim(passwordRequiredMessage);
        const passwordValidators = validators.composeValidators(
          passwordRequired,
          passwordMinLength,
          passwordMaxLength
        );

        // firstName
        const firstNameLabel = intl.formatMessage({
          id: 'SignupForm.firstNameLabel',
        });
        const firstNamePlaceholder = intl.formatMessage({
          id: 'SignupForm.firstNamePlaceholder',
        });
        const firstNameRequiredMessage = intl.formatMessage({
          id: 'SignupForm.firstNameRequired',
        });
        const firstNameRequired = validators.required(firstNameRequiredMessage);

        // lastName
        const lastNameLabel = intl.formatMessage({
          id: 'SignupForm.lastNameLabel',
        });
        const lastNamePlaceholder = intl.formatMessage({
          id: 'SignupForm.lastNamePlaceholder',
        });
        const lastNameRequiredMessage = intl.formatMessage({
          id: 'SignupForm.lastNameRequired',
        });
        const lastNameRequired = validators.required(lastNameRequiredMessage);

        const classes = classNames(rootClassName || css.root, className);
        const submitInProgress = inProgress;
        const submitDisabled = invalid || submitInProgress || !termsAccepted;

        const handleTermsKeyUp = e => {
          // Allow click action with keyboard like with normal links
          if (e.keyCode === KEY_CODE_ENTER) {
            onOpenTermsOfService();
          }
        };
        const termsLink = (
          <span
            className={css.termsLink}
            onClick={onOpenTermsOfService}
            role="button"
            tabIndex="0"
            onKeyUp={handleTermsKeyUp}
          >
            <FormattedMessage id="SignupForm.termsAndConditionsLinkText" />
          </span>
        );

        return (
          <Form className={classes} onSubmit={handleSubmit}>
            <div>
              <FieldTextInput
                type="email"
                id={formId ? `${formId}.email` : 'email'}
                name="email"
                autoComplete="email"
                label={emailLabel}
                placeholder={emailPlaceholder}
                validate={validators.composeValidators(emailRequired, emailValid)}
              />
              <div className={css.name}>
                <FieldTextInput
                  className={css.firstNameRoot}
                  type="text"
                  id={formId ? `${formId}.fname` : 'fname'}
                  name="fname"
                  autoComplete="given-name"
                  label={firstNameLabel}
                  placeholder={firstNamePlaceholder}
                  validate={firstNameRequired}
                />
                <FieldTextInput
                  className={css.lastNameRoot}
                  type="text"
                  id={formId ? `${formId}.lname` : 'lname'}
                  name="lname"
                  autoComplete="family-name"
                  label={lastNameLabel}
                  placeholder={lastNamePlaceholder}
                  validate={lastNameRequired}
                />
              </div>
              <FieldTextInput
                className={css.password}
                type="password"
                id={formId ? `${formId}.password` : 'password'}
                name="password"
                autoComplete="new-password"
                label={passwordLabel}
                placeholder={passwordPlaceholder}
                validate={passwordValidators}
              />
            </div>

            <div className={css.bottomWrapper}>
              <div className={css.bottomWrapperText}>
                <div className={css.acceptTerms}>
                  <input type="checkbox" checked={termsAccepted} onChange={handleCheckbox} id="acceptTerms" />
                  <label className={css.termsText} htmlFor="acceptTerms">
                    <FormattedMessage
                      id="SignupForm.termsAndConditionsAcceptText"
                      values={{ termsLink }}
                    />
                  </label>
                </div>
              </div>
              <PrimaryButton type="submit" inProgress={submitInProgress} disabled={submitDisabled}>
                <FormattedMessage id="SignupForm.signUp" />
              </PrimaryButton>
            </div>
          </Form>
        );
      }}
    />
  );
}

SignupFormComponent.defaultProps = { inProgress: false };

const { bool, func } = PropTypes;

SignupFormComponent.propTypes = {
  inProgress: bool,

  onOpenTermsOfService: func.isRequired,

  // from injectIntl
  intl: intlShape.isRequired,
};

const SignupForm = compose(injectIntl)(SignupFormComponent);
SignupForm.displayName = 'SignupForm';

export default SignupForm;
