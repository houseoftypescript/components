import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Textarea } from '..';

const meta: Meta<typeof Textarea> = {
  title: 'Form/Textarea',
  component: Textarea,
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const TextareaPrimary: Story = {
  render: () => <Textarea placeholder="Here is a sample placeholder" />,
};
