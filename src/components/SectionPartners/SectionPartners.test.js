import React from 'react';
import { renderDeep } from '../../util/test-helpers';
import SectionPartners from './SectionPartners';

const noop = () => null;

describe('SectionPartners', () => {
  it('matches snapshot', () => {
    window.google = { maps: {} };
    const heroProps = {
      history: { push: noop },
      location: { search: '' },
    };
    const tree = renderDeep(<SectionPartners {...heroProps} />);
    delete window.google;
    expect(tree).toMatchSnapshot();
  });
});
