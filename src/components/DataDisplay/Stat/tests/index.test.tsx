import { render } from '@testing-library/react';
import React from 'react';
import Stat from '../index';

describe('Stat', () => {
  it('to match snapshot', () => {
    const { container } = render(
      <Stat>
        <Stat.Label>Collected Fees</Stat.Label>
        <Stat.Number>£0.00</Stat.Number>
        <Stat.HelpText>Feb 12 - Feb 28</Stat.HelpText>
      </Stat>
    );
    expect(container).toMatchSnapshot();
  });
});
