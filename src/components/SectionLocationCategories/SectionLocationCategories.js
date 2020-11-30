import React from 'react';
import { string, object } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { createResourceLocatorString } from '../../util/routes';
import { categories } from '../../marketplace-custom-config';
import routeConfiguration from '../../routeConfiguration';
import css from './SectionLocationCategories.css';

import hightStreet from './images/high-street.jpg';
import shoppingMall from './images/shopping-mall.jpg';
import showroom from './images/showroom.jpg';

const SectionLocationCategories = ({ history, className }) => {

  const openResults = (category) => {
    const params = { 'pub_categories': category.key };
    history.push(createResourceLocatorString('SearchPage', routeConfiguration(), {}, params));
  }

  return (
    <section className={css.root}>
      <div className={classNames(css.container, className)}>
        <div className={css.row}>
          <h4 className={css.h4}>
            <FormattedMessage id="sectionLocationCategories.title" />
          </h4>
        </div>
        <div className={css.row}>
          <div className={css.item}>
            <div className={css.card} onClick={() => { openResults(categories.find(c => c.key === 'retail')) }}>
              <div className={css.cardHeader} style={{ backgroundImage: `url('${hightStreet}')` }}></div>
              <div className={css.cardContent}>
                <h5 className={css.cardTitle}>High Street</h5>
                <div className={css.cardDescription}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mauris condimentum in lectus consequat laoreet. Imperdiet amet eu.</p>
                </div>
                <div className={css.cardBottomDetails}>
                  <span>5 000 kr/week</span> • <span>16 000 visitors/week</span>
                </div>
              </div>
            </div>
          </div>
          <div className={css.item}>
            <div className={css.card} onClick={() => { openResults(categories.find(c => c.key === 'mall')) }}>
              <div className={css.cardHeader} style={{ backgroundImage: `url('${shoppingMall}')` }}></div>
              <div className={css.cardContent}>
                <h5 className={css.cardTitle}>Shopping Mall</h5>
                <div className={css.cardDescription}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mauris condimentum in lectus consequat laoreet. Imperdiet amet eu.</p>
                </div>
                <div className={css.cardBottomDetails}>
                  <span>5 000 kr/week</span> • <span>16 000 visitors/week</span>
                </div>
              </div>
            </div>
          </div>
          <div className={css.item}>
            <div className={css.card} onClick={() => { openResults(categories.find(c => c.key === 'showroom')) }}>
              <div className={css.cardHeader} style={{ backgroundImage: `url('${showroom}')` }}></div>
              <div className={css.cardContent}>
                <h5 className={css.cardTitle}>Showroom</h5>
                <div className={css.cardDescription}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mauris condimentum in lectus consequat laoreet. Imperdiet amet eu.</p>
                </div>
                <div className={css.cardBottomDetails}>
                  <span>5 000 kr/week</span> • <span>16 000 visitors/week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

SectionLocationCategories.defaultProps = {
  className: null,
};

SectionLocationCategories.propTypes = {
  className: string,
  history: object.isRequired,
};

export default SectionLocationCategories;
