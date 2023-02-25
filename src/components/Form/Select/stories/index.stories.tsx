import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Select } from '..';

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const SelectPrimary: Story = {
  render: () => (
    <Select>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </Select>
  ),
};
