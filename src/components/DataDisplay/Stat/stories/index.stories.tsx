import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Stat from '..';

const meta: Meta<typeof Stat> = {
  title: 'DataDisplay/Stat',
  component: Stat,
};

export default meta;
type Story = StoryObj<typeof Stat>;

export const StatPrimary: Story = {
  render: () => (
    <Stat>
      <Stat.Label>Collected Fees</Stat.Label>
      <Stat.Number>£0.00</Stat.Number>
      <Stat.HelpText>Feb 12 - Feb 28</Stat.HelpText>
    </Stat>
  ),
};
