import React from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { ExternalLink } from '../../components';

import pic1 from './img/pic1.jpg';
import pic2 from './img/pic2.jpg';
import iconArrow from './img/arrow-right-icon.svg';
import iconLocation from './img/location-icon.svg';

import css from './SectionBlog.css';

const SectionBlog = ({ className }) => {
    return (
        <section className={css.root}>
            <div className={classNames(css.container, className)}>
                <div className={css.row}>
                    <h4 className={css.h4}>
                        <FormattedMessage id="SectionBlog.title" />
                    </h4>
                </div>
                <div className={css.row}>
                    <div className={css.item}>
                        <div className={css.bgImage} style={{ backgroundImage: `url('${pic1}')` }}></div>
                        <div className={css.card}>
                            <div className={css.cardContent} >
                                <div className={css.cardPreTitle}>VOI</div>
                                <div className={css.cardTitle}>Custom helmets in an art gallery</div>
                                <div className={css.cardDescription}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque magna duis rhoncus tincidunt est parturient tortor proin. Hac eleifend placerat a sem adipiscing iaculis. Tincidunt convallis amet amet at et mi arcu faucibus luctus.</p>
                                </div>
                            </div>
                            <div className={css.cardActions}>
                                <ExternalLink href="https://blog.xnomad.co/2019/08/02/keeping-up-with-kylies-pop-ups/" className={css.textLink}><img src={iconArrow} alt="" /> <FormattedMessage id="SectionBlog.readMore" /></ExternalLink>
                                <ExternalLink href="https://blog.xnomad.co/2019/08/02/keeping-up-with-kylies-pop-ups/" className={css.textLink}><img src={iconLocation} alt="" /> <FormattedMessage id="SectionBlog.viewSpace" /></ExternalLink>
                            </div>
                        </div>
                    </div>

                    <div className={css.item}>
                        <div className={css.bgImage} style={{ backgroundImage: `url('${pic2}')` }}></div>
                        <div className={css.card}>
                            <div className={css.cardContent} >
                                <div className={css.cardPreTitle}>Babymocs</div>
                                <div className={css.cardTitle}>Walking the walk</div>
                                <div className={css.cardDescription}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque magna duis rhoncus tincidunt est parturient tortor proin. Hac eleifend placerat a sem adipiscing iaculis. Tincidunt convallis amet amet at et mi arcu faucibus luctus.</p>
                                </div>
                            </div>
                            <div className={css.cardActions}>
                                <ExternalLink href="https://blog.xnomad.co/2019/08/02/keeping-up-with-kylies-pop-ups/" className={css.textLink}><img src={iconArrow} alt="" />  <FormattedMessage id="SectionBlog.readMore" /></ExternalLink>
                                <ExternalLink href="https://blog.xnomad.co/2019/08/02/keeping-up-with-kylies-pop-ups/" className={css.textLink}><img src={iconLocation} alt="" />  <FormattedMessage id="SectionBlog.viewSpace" /></ExternalLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.row}>
                    <ExternalLink href="https://blog.xnomad.co/" className={css.primaryBtn}><FormattedMessage id="SectionBlog.exploreBlog" /></ExternalLink>
                </div>
            </div>
        </section>
    );
};

SectionBlog.defaultProps = {
    className: null
};

SectionBlog.propTypes = {
    className: string,
};

export default SectionBlog;

