import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Spinner from '..';

const meta: Meta<typeof Spinner> = {
  title: 'Feedback/Spinner',
  component: Spinner,
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const SpinnerPrimary: Story = {
  render: () => <Spinner />,
};
