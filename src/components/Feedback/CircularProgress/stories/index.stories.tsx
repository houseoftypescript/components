import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import CircularProgress from '..';

const meta: Meta<typeof CircularProgress> = {
  title: 'Feedback/Circular Progress',
  component: CircularProgress,
};

export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const CircularProgressPrimary: Story = {
  render: () => <CircularProgress value={50} />,
};
