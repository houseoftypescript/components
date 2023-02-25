import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input } from '..';

const meta: Meta<typeof Input> = {
  title: 'Form/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputPrimary: Story = {
  render: () => <Input placeholder="Here is a sample placeholder" />,
};
