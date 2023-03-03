import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Progress } from '..';

const meta: Meta<typeof Progress> = {
  title: 'Feedback/Progress',
  component: Progress,
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const ProgressPrimary: Story = {
  render: () => <Progress value={80} />,
};
