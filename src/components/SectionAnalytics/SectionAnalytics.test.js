import React from 'react';
import { renderDeep } from '../../util/test-helpers';
import SectionAnalytics from './SectionAnalytics';

const noop = () => null;

describe('SectionAnalytics', () => {
  it('matches snapshot', () => {
    window.google = { maps: {} };
    const heroProps = {
      history: { push: noop },
      location: { search: '' },
    };
    const tree = renderDeep(<SectionAnalytics {...heroProps} />);
    delete window.google;
    expect(tree).toMatchSnapshot();
  });
});
