import React from 'react';
import { renderDeep } from '../../util/test-helpers';
import SectionGetInContact from './SectionGetInContact';

const noop = () => null;

describe('SectionGetInContact', () => {
  it('matches snapshot', () => {
    window.google = { maps: {} };
    const heroProps = {
      history: { push: noop },
      location: { search: '' },
    };
    const tree = renderDeep(<SectionGetInContact {...heroProps} />);
    delete window.google;
    expect(tree).toMatchSnapshot();
  });
});
