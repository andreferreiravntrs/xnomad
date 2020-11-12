import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { manageDisableScrolling } from '../../ducks/UI.duck';
import classNames from 'classnames';
import { Modal, ContactPost } from '../../components';
import config from '../../config';
import imgAgency from './img/agency-guide.png';
import imgBuzz from './img/create-buzz-guide.png';
import imgEcommerce from './img/e-commerce-guide.png';
import imgFashion from './img/fashion-guide.png';
import imgGetStarted from './img/how-to-get-started-guide.png';

import css from './SectionContact.css';

class SectionContact extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };
    this.createForm = this.createForm.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  createForm(formId) {
    if (window.hbspt) {
      window.hbspt.forms.create({
        portalId: config.hubSpot.portalId,
        formId: formId,
        target: '#hubspotForm',
      });
    }
  }

  handleOpenModal(formId) {
    this.hsScript.addEventListener('load', this.createForm(formId));
    this.setState({ modalIsOpen: true });
  }

  handleCloseModal() {
    this.hsScript.removeEventListener('load', this.createForm);
    this.setState({ modalIsOpen: false });

    const hsDiv = document.getElementById('hubspotForm');
    while (hsDiv.firstChild) {
      hsDiv.removeChild(hsDiv.firstChild);
    }
  }

  componentDidMount() {
    this.hsScript = document.createElement('script');
    this.hsScript.src = '//js.hsforms.net/forms/shell.js';
    this.hsScript.async = true;
    document.body.appendChild(this.hsScript);
  }

  render() {
    const { className, onManageDisableScrolling } = this.props;

    const {
      getStartedFormId,
      fashionFormId,
      ecommerceFormId,
      agencyFormId,
      buzzFormId,
    } = config.hubSpot;

    return (
      <section className={css.root}>
        <div className={classNames(css.container, className)}>
          <div className={css.row}>
            <h4 className={css.h4}>
              <FormattedMessage id="SectionContact.title" />
            </h4>
          </div>
          <div className={classNames(css.row, css.padding)}>
            <div className={css.item}>
              <ContactPost
                image={imgGetStarted}
                intlMessageId="ContactPost.getStarted"
                formId={getStartedFormId}
                handleOpenModal={this.handleOpenModal}
              />
            </div>
            <div className={css.item}>
              <ContactPost
                image={imgFashion}
                intlMessageId="ContactPost.fashion"
                formId={fashionFormId}
                handleOpenModal={this.handleOpenModal}
              />
            </div>
            <div className={css.item}>
              <ContactPost
                image={imgEcommerce}
                intlMessageId="ContactPost.ecommerce"
                formId={ecommerceFormId}
                handleOpenModal={this.handleOpenModal}
              />
            </div>
            <div className={css.item}>
              <ContactPost
                image={imgAgency}
                intlMessageId="ContactPost.agency"
                formId={agencyFormId}
                handleOpenModal={this.handleOpenModal}
              />
            </div>
            <div className={css.item}>
              <ContactPost
                image={imgBuzz}
                intlMessageId="ContactPost.buzz"
                formId={buzzFormId}
                handleOpenModal={this.handleOpenModal}
              />
            </div>
          </div>
        </div>
        <Modal
          id="LandingPage.sectionContact"
          isOpen={this.state.modalIsOpen}
          onClose={this.handleCloseModal}
          onManageDisableScrolling={onManageDisableScrolling}
        >
          <div id="hubspotForm" />
        </Modal>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onManageDisableScrolling: (componentId, disableScrolling) =>
    dispatch(manageDisableScrolling(componentId, disableScrolling)),
});

export default connect(
  undefined,
  mapDispatchToProps
)(SectionContact);
