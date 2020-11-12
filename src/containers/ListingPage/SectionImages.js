import React from 'react';
import { ResponsiveImage } from '../../components';
import { Carousel } from 'react-responsive-carousel';
import ActionBarMaybe from './ActionBarMaybe';

import css from './ListingPage.css';

const SectionImages = props => {
  const {
    title,
    listing,
    isOwnListing,
    editParams,
  } = props;

  const hasImages = listing.images && listing.images.length > 0;
  const images = hasImages ? listing.images : null;

  const showDots = images.length > 1;

  // Action bar is wrapped with a div that prevents the click events
  // to the parent that would otherwise open the image carousel
  const actionBar = listing.id ? (
    <div onClick={e => e.stopPropagation()}>
      <ActionBarMaybe isOwnListing={isOwnListing} listing={listing} editParams={editParams} />
    </div>
  ) : null;

  return (
    <div className={css.sectionImages}>
      <div className={css.threeToTwoWrapper}>
        <div className={css.aspectWrapper}>
          {actionBar}
          <div className={css.carousel}>
            <Carousel showThumbs={false} showArrows={true} showStatus={false} infiniteLoop={true} showIndicators={showDots}>
              {images.map(image => (
                <ResponsiveImage
                rootClassName={css.rootForImage}
                alt={title}
                image={image}
                key={image.id.uuid}
                variants={[
                  'landscape-crop',
                  'landscape-crop2x',
                  'landscape-crop4x',
                  'landscape-crop6x',
                ]}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionImages;
