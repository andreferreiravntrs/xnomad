import React from 'react';
import { renderDeep } from '../../util/test-helpers';
import SectionProudPartners from './SectionProudPartners';

const noop = () => null;

describe('SectionProudPartners', () => {
  it('matches snapshot', () => {
    window.google = { maps: {} };
    const heroProps = {
      history: { push: noop },
      location: { search: '' },
    };
    const tree = renderDeep(<SectionProudPartners {...heroProps} />);
    delete window.google;
    expect(tree).toMatchSnapshot();
  });
});
