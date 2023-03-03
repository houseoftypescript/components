import { render } from '@testing-library/react';
import React from 'react';
import Progress from '../index';

describe('Progress', () => {
  it('to match snapshot', () => {
    const { container } = render(<Progress value={10} />);
    expect(container).toMatchSnapshot();
  });
});
