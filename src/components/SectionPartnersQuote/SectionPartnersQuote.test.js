import React from 'react';
import { renderDeep } from '../../util/test-helpers';
import SectionPartnersQuote from './SectionPartnersQuote';

const noop = () => null;

describe('SectionPartnersQuote', () => {
  it('matches snapshot', () => {
    window.google = { maps: {} };
    const heroProps = {
      history: { push: noop },
      location: { search: '' },
    };
    const tree = renderDeep(<SectionPartnersQuote {...heroProps} />);
    delete window.google;
    expect(tree).toMatchSnapshot();
  });
});
