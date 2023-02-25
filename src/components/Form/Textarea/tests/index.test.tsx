import { render } from '@testing-library/react';
import { Textarea } from '../index';
import React from 'react';

describe('Textarea', () => {
  it('to match snapshot', () => {
    const { container } = render(<Textarea />);
    expect(container).toMatchSnapshot();
  });
});
