import { render } from '@testing-library/react';
import React from 'react';
import CircularProgress from '../index';

describe('CircularProgress', () => {
  it('to match snapshot', () => {
    const { container } = render(<CircularProgress value={50} />);
    expect(container).toMatchSnapshot();
  });
});
