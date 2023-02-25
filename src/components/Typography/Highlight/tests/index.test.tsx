import { render } from '@testing-library/react';
import { Highlight } from '../index';
import React from 'react';

describe('Highlight', () => {
  it('to match snapshot', () => {
    const { container } = render(<Highlight>Highlight</Highlight>);
    expect(container).toMatchSnapshot();
  });
});
