import { render } from '@testing-library/react';
import Card from '../index';
import React from 'react';

describe('Card', () => {
  it('to match snapshot', () => {
    const { container } = render(
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Body>Body</Card.Body>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    );
    expect(container).toMatchSnapshot();
  });
});
