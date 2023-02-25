import { render } from '@testing-library/react';
import { Text } from '../index';
import React from 'react';

describe('Text', () => {
  it('to match snapshot', () => {
    const { container } = render(<Text>Text</Text>);
    expect(container).toMatchSnapshot();
  });
});
