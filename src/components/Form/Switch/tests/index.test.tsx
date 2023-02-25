import { render } from '@testing-library/react';
import { Switch } from '../index';
import React from 'react';

describe('Switch', () => {
  it('to match snapshot', () => {
    const { container } = render(<Switch />);
    expect(container).toMatchSnapshot();
  });
});
