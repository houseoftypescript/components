import { render } from '@testing-library/react';
import React from 'react';
import { Divider } from '../index';

describe('Card', () => {
  it('to match snapshot', () => {
    const { container } = render(<Divider />);
    expect(container).toMatchSnapshot();
  });
});
