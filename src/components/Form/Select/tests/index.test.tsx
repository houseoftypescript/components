import { render } from '@testing-library/react';
import { Select } from '../index';
import React from 'react';

describe('Select', () => {
  it('to match snapshot', () => {
    const { container } = render(<Select />);
    expect(container).toMatchSnapshot();
  });
});
