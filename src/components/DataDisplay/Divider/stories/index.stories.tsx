import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Divider from '..';

const meta: Meta<typeof Divider> = {
  title: 'DataDisplay/Divider',
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const DividerPrimary: Story = {
  render: () => <Divider />,
};
