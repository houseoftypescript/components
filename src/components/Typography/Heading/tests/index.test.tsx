import { render } from '@testing-library/react';
import { Heading } from '../index';
import React from 'react';

describe('Heading', () => {
  it('to match snapshot', () => {
    const { container } = render(<Heading>Heading</Heading>);
    expect(container).toMatchSnapshot();
  });
});
