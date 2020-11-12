import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { richText } from '../../util/richText';
import classNames from 'classnames';

import css from './ListingPage.css';
import arrow from '../../assets/arrow.svg';

const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;
const MAX_WORD_COUNT = 100;

class SectionDescriptionMaybe extends Component {
  constructor(props) {
    super(props);
    this.descRef = React.createRef();
    this.state = {
      truncate: true
    }
    this.truncateText = this.truncateText.bind(this);
  };

  truncateText() {
    if(!this.state.truncate) {
      this.descRef.current.scrollIntoView();
      // Adjust for the header height
      window.scrollBy({top: -80});
    }
    this.setState({ truncate: !this.state.truncate });
  }

  render() {
    const { description } = this.props;
    let formattedDescription = richText(
      description, 
      {
        longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
        longWordClass: css.longWord,
      }
    );
    
    const showText = 
      <div className={css.descriptionTruncateContainer}>
        <button onClick={this.truncateText} className={css.descriptionTruncate}>
          <FormattedMessage id={this.state.truncate ? 
            "ListingPage.description.showMore" : "ListingPage.description.showLess" } 
          />
          <img src={arrow} 
            alt='expand' 
            className={classNames(css.arrowIcon, (!this.state.truncate ? css.flipped : ""))}/>
        </button>
      </div>;
    
    if (this.state.truncate && formattedDescription.length > MAX_WORD_COUNT) {
      formattedDescription = formattedDescription.slice(0,MAX_WORD_COUNT);
      formattedDescription.push(" . . .")
    };

    return description ? (
      <div className={css.sectionDescription}>
        <h2 className={css.descriptionTitle} ref={this.descRef}>
          <FormattedMessage id="ListingPage.descriptionTitle" />
        </h2>
        <p className={css.description}>
            {formattedDescription}
        </p>
          {(formattedDescription.length > MAX_WORD_COUNT ? showText : "")}
      </div>
    ) : null;
  };
}

export default SectionDescriptionMaybe;
