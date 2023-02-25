import { render } from '@testing-library/react';
import React from 'react';
import List from '../index';

describe('List', () => {
  it('to match snapshot', () => {
    const { container } = render(
      <List>
        <List.Item>Item</List.Item>
        <List.Item>Item</List.Item>
        <List.Item last>Item</List.Item>
      </List>
    );
    expect(container).toMatchSnapshot();
  });
});
