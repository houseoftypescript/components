import { render } from '@testing-library/react';
import React from 'react';
import Spinner from '../index';

describe('Spinner', () => {
  it('to match snapshot', () => {
    const { container } = render(<Spinner />);
    expect(container).toMatchSnapshot();
  });
});
