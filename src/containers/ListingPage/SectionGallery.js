import React, { Component } from 'react';
import { ResponsiveImage } from '../../components';
import classNames from 'classnames';
import { FormattedMessage } from '../../util/reactIntl';
import { injectIntl, intlShape } from '../../util/reactIntl';

import css from './ListingPage.css';

class SectionGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImageIndex: 0,
    };
  }
  
  render() {
    const { images, intl } = this.props;
    const imageAlt = intl.formatMessage({id: 'ListingPage.gallery.imageAlt'});
    const thumbnailAlt = intl.formatMessage({id: 'ListingPage.gallery.thumbnailAlt'});

    return (
      <div className={css.sectionGallery}>
        <div className={css.gallery}>
          <h3 className={css.sectionGalleryTitle}>
            <FormattedMessage
              id="ListingPage.gallery.title"
            />
          </h3>
          <div className={css.galleryImageContainer}>
            {this.props.images.map((image, index) => (
              <ResponsiveImage
                className={index === this.state.selectedImageIndex ? css.gallerySelectedImage : css.galleryImage}
                alt={imageAlt + ' ' + (parseInt(index, 10)+1)}
                image={image}
                variants={[
                  'landscape-crop',
                  'landscape-crop2x',
                  'landscape-crop4x',
                  'landscape-crop6x',
                ]}
                key={image.id.uuid}
              />
            ))}
          </div>
          <div className={css.galleryThumbnails}>
            {images.map((image, index) => (
              <div 
                className={classNames(css.galleryThumbnailContainer, 
                  (images[this.state.selectedImageIndex].id.uuid === image.id.uuid ? 
                    css.galleryThumbnailContainerSelected : null)
                )}
                key={image.id.uuid}
              >
                <ResponsiveImage
                  className={css.galleryThumbnail}
                  alt={thumbnailAlt + ' ' + (parseInt(index, 10)+1)}
                  image={image}
                  variants={[
                    'square-small',
                  ]}
                  onClick={() => {
                    this.setState({
                      selectedImageIndex: index
                    });
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};
SectionGallery.propTypes = {
  intl: intlShape.isRequired
}

export default injectIntl(SectionGallery);