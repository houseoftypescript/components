import { render } from '@testing-library/react';
import React from 'react';
import Alert from '../index';

describe('Alert', () => {
  it('to match snapshot', () => {
    const { container } = render(
      <Alert type="info">
        <Alert.Title>Title</Alert.Title>
        <Alert.Description>Description</Alert.Description>
      </Alert>
    );
    expect(container).toMatchSnapshot();
  });
});
