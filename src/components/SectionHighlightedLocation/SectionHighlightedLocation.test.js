import React from 'react';
import { renderDeep } from '../../util/test-helpers';
import SectionHighlightedLocation from './SectionHighlightedLocation';

const noop = () => null;

describe('SectionHighlightedLocation', () => {
  it('matches snapshot', () => {
    window.google = { maps: {} };
    const heroProps = {
      history: { push: noop },
      location: { search: '' },
    };
    const tree = renderDeep(<SectionHighlightedLocation {...heroProps} />);
    delete window.google;
    expect(tree).toMatchSnapshot();
  });
});
