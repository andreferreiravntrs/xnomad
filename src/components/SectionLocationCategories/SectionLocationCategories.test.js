import React from 'react';
import { renderDeep } from '../../util/test-helpers';
import SectionLocationCategories from './SectionLocationCategories';

const noop = () => null;

describe('SectionLocationCategories', () => {
  it('matches snapshot', () => {
    window.google = { maps: {} };
    const heroProps = {
      history: { push: noop },
      location: { search: '' },
    };
    const tree = renderDeep(<SectionLocationCategories {...heroProps} />);
    delete window.google;
    expect(tree).toMatchSnapshot();
  });
});
