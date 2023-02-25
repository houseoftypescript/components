import { render } from '@testing-library/react';
import { Input } from '../index';
import React from 'react';

describe('Input', () => {
  it('to match snapshot', () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });
});
